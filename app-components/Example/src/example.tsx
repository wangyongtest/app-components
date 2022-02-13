
import { defineComponent, toRefs } from "vue";
import { ExampleProps, ExampleItem, exampleProps } from './example-types'
import useToggle from './composables/use-toggle'

export default defineComponent({
    name: 'Example',
    props: exampleProps,
    emits: [],
    setup(props: ExampleProps, ctx) {
        const { data } = toRefs(props)
        console.log(props, data, '111')
        const { floatData } = useToggle(data.value)
        return () =>{
            console.log(data, data.value)
            return (
                <div class="vueApp-example">
                    { data.value.map((item: ExampleItem) => (<span class="item">{item.label}<br/></span>)) }
                </div>
            )
        }
    }
})