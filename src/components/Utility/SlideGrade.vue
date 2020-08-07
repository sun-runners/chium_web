<template>
  <div class="row">
    <div class="col-3">{{ label }}</div>
    <div class="col-8">
        <input type="range"
        :value="value"
        min="0"
        max="10"
        step=".1"
        @change="changeValue($event)"
        />
    </div>
    <div class="col-1 row items-center justify-center q-pl-lg">
        <p class="text-bold">{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String
  },
  methods: {
    changeValue (newValue) {
      this.$emit('changeValue', newValue.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
// now for the good stuff 🎉
input[type="range"] {
	outline: 0;
	border: 0;
	border-radius: 500px;
	width: 400px;
	max-width: 100%;
	// margin: 24px 0 16px;
	transition: box-shadow 0.2s ease-in-out;
	// Chrome
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		& {
			overflow: hidden;
			height: 10px;
			-webkit-appearance: none;
			background-color: #ddd;
		}
		&::-webkit-slider-runnable-track {
			height: 10px;
			-webkit-appearance: none;
			color: #444;
			// margin-top: -1px;
			transition: box-shadow 0.2s ease-in-out;
		}
		&::-webkit-slider-thumb {
			width: 30px;
			-webkit-appearance: none;
			height: 10px;
			cursor: ew-resize;
			background: #fff;
			box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 40px #1597ff;
			border-radius: 20%;
			transition: box-shadow 0.2s ease-in-out;
			position: relative;
			// top: 1px;
		}
		&:active::-webkit-slider-thumb {
			background: #fff;
			box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 3px #1597ff;
		}
	}
	// Firefox
	&::-moz-range-progress {
		background-color: #1597ff;
		height: 10px;
	}
	&::-moz-range-track {
		background-color: #ddd;
		height: 10px;
	}
	// IE
	&::-ms-fill-lower {
		background-color: #43e5f7;
	}
	&::-ms-fill-upper {
		background-color: #9a905d;
	}
}

input:not(:active) + #h4-container h4 {
	opacity: 0;
	margin-top: -50px;
	pointer-events: none;
}

</style>
