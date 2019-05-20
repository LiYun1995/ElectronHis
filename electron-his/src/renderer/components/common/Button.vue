<template>
	<div>
		<button :class="computClass" :style="computStyle" @click="emitFather">
			<slot></slot>
		</button>
	</div>
</template>

<script>
const defaultName = 'his-components-button'
const commonClassName = 'his-components-button-common'
export default {
	name: 'Button',
	props: {
		value: {
			type: String,
			default: '确认'
		},
		type: {
			type: String,
			default: 'default'
		},
		width: {
			type: [Number, String],
			default: '100%'
		},
		click: {
			type: Function
		}
	},
	data() {
		return {}
	},
	computed: {
		computClass() {
			switch (this.type) {
				case 'error':
					return `${defaultName}-error ${commonClassName}`
				case 'default':
					return `${defaultName}-default ${commonClassName}`
			}
		},
		computStyle() {
			if (this.width.indexOf('p') !== -1) {
				return { width: this.width }
			} else if (this.width.indexOf('%') !== -1) {
				return { width: this.width }
			}
			return { width: this.width + 'px' }
		}
	},
	methods: {
		emitFather() {
			if (this.click) {
				this.click()
			}
		}
	}
}
</script>

<style scoped>
</style>