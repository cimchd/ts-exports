
import MyComponent1 from '@project/test/components/MyComponent1.vue';
import MyComponent2 from '@project/test/dist/components/MyComponent2.vue';
import { MyComponent3 } from '@project/test/components';

export default (await import('vue')).defineComponent({
	setup() {
		return () => {
			// @ts-ignore
			MyComponent1;
			// @ts-ignore
			MyComponent2;
			// @ts-ignore
			MyComponent3;
			{
			}
			{
			}
			{
			}
		};
	},
});
