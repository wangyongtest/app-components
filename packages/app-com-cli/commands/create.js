import inquirer from "inquirer";
import { red } from "kolorist";

// 定义 createType 支持项
const CREATE_TYPES = ["component", "lib-entry"];

// 文档分类
const DOC_CATEGORIES = ["通用", "导航", "反馈", "数据录入", "数据展示", "布局"];

export async function onCreate(cmd = {}) {
  let { type } = cmd;
  if (!type) {
    const result = await inquirer.prompt([
      {
        // 用于获取属性名
        name: "type",
        // 交互方式为列表单选
        type: "list",
        //  提示信息
        message: "(必填)请选择创建类型",
        // 选项列表
        choices: CREATE_TYPES,
        // M默认值 下标
        default: 0,
      },
    ]);
    type = result.type;
  }

  if (CREATE_TYPES.every((t) => t !== type)) {
    console.log(
      red(
        `当前类型仅支持:${CREATE_TYPES.join()},收到不在支持范围的${type},请重寻选择!`
      )
    );
    return onCreate();
  }
  try {
    switch (type) {
      case "component": {
        //   如果为组件还需要收集信息
        const info = await inquirer.prompt([
          {
            name: "name",
            type: "input",
            validate: (value) => {
              if (value.trim() === "") {
                return "组件name 是必填项";
              }
              return true;
            },
          },
          {
            name: "title",
            type: "input",
            message: "(必填)请输入组件名称name,将用作目录即文件结构",
            validate: (value) => {
              if (value.trim() === "") {
                return "组件名称是必填项！";
              }
              return true;
            },
          },
          {
            name: "category",
            type: "list",
            message: "(必填)请选择组件分类，将用作文档列表分类：",
            choices: CREATE_TYPES,
            default: 0,
          },
        ]);
        createComponent(info);
        break;
      }
      case "lib-entry": {
        createLibEntry();
        break;
      }
      default:
        break;
    }
  } catch (e) {
    console.log(red("X") + e.toString());
    process.exit(1);
  }
}

function createComponent(info) {
  console.log(info, "收集到的以来信息");
}

function createLibEntry() {
  console.log("create lib file");
}
