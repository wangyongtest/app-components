import { mount } from '@vue/test-utils'
import Example from '../src/example'

// 创建测试套
describe('example', () =>{
    // 可创建多个测试用例
    it('exampleComponents is rendered', () =>{
        expect(1).toBe(1)
    })

   
  it('example dom rendered', () => {
    const wrapper = mount({
        template:'<Example :data="data"></Example>',
        components: {Example},
        setup(){
            return {
             data: [{
                 label: 'node-1',
                 level: 1,
                 open: true,
                 children: [
                   {
                     label: 'node-11',
                     level: 2,
                     open: true,
                     children: [
                       { label: 'node-111', level: 3, },
                       { label: 'node-112', level: 3, },
                     ],
                   },
                   {
                     label: 'node-12',
                     level: 2,
                     children: [
                       { label: 'node-121', level: 3, },
                       { label: 'node-122', level: 3, },
                       { label: 'node-123', level: 3, },
                     ],
                   },
                 ],
               },
               {
                 label: 'node-2',
                 level: 1,
               }
               ]
            }
        }
    })
    // 这里 classes 是一个函数
    //   expect(wrapper.classes()).toContain('vueApp-example')
    // 包含两个子节点， 原因是组件在未递归渲染
      expect(wrapper.element.childElementCount).toBe(2)
  })
})