import { Input } from '/js/ui/components/index';

export default {
	name: 'Number',
	defaultValue: 0,
	view: () => {
		return {
			oninit() {},
			view(vnode) {
				return (
					<Input
						value={vnode.attrs.value}
						label={vnode.attrs.label}
						oninput={(e) => vnode.attrs.oninput(parseInt(e.target.value) | 0)}
					></Input>
				);
			},
		};
	},
};
