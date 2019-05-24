<template>
	<div :class="[classNames + '-container']">
		<div :class="[classNames + '-father']" v-for="item in trees">
			{{item.name}}
		</div>
	</div>
</template>

<script>
const classNames = 'his-manage-leftree'
const menu = require('./menu.js')
export default {
	name: 'left-tree',
	data() {
		return {
			classNames: classNames,
			trees: menu.default.memu
		}
	},
	mounted(){
		console.log(menu);
	}
}
</script>
