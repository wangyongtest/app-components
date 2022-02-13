
import type { PropType, ExtractPropTypes} from "vue";

// 声明 exampleItem 数据类型 ==> 子项
export  interface ExampleItem {
    label: string,
    children: ExampleData,
    [key:string]: any
}

// 声明 exampleData 数据类型 ==> 整体数据
export type ExampleData = Array<ExampleItem>

// 定义 exampleProps 类型不可变
export const exampleProps = {
    data:{
        type: Array as PropType<ExampleData>,
        default: () => []
    }
} as const

// ExtractPropTypes vue 类型反推 函数
export type ExampleProps = ExtractPropTypes<typeof exampleProps>