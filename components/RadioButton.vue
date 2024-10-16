<template>
	<label :class="['radio-button', { 'is-selected': isSelected }]" @click="toggleRadio">
		<input type="radio" :name="name" :value="value" :checked="isSelected" class="sr-only" @change="emitChange" />
		<span class="radio-label">{{ label }}</span>
	</label>
</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps({
	modelValue: {
		type: [String, Number],
		required: true,
	},
	value: {
		type: [String, Number],
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(['update:modelValue']);

const isSelected = computed(() => props.modelValue === props.value);

const emitChange = () => {
	emit('update:modelValue', props.value);
	emit('radio-selected', props.value);
};
</script>

<style scoped>
.radio-button {
	display: inline-block;
	padding: 5px 0;
	text-align: center;
	border: 2px solid #9c4b4b;
	border-radius: 5px;
	background-color: #fff;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;
}

.radio-button.is-selected {
	background-color: #9c4b4b;
	color: #fff;
}

.radio-label {
	pointer-events: none; /* Prevent label clicks from being registered on the label */
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
}
</style>
