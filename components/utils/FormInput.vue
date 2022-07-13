<template>
  <div class="field px-2">
    <label class="field__label d-flex flex-column" :for="`input${id}`" >{{ label }}</label>
    <!-- <br> -->
    <input
      :id="`input${id}`"
      class="field__input"
      :style="`width: ${width}; height: ${height};`"
      :type="inputType"
      :value="value"
      v-model="typedContent"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'form-input',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '32px',
    },
    input: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    }
  },

  data () {
    return {
      typedContent: this.value || '',
    }
  },

  watch: {
    typedContent: {
      handler () {
        this.addContactInputsContent({ typedContent: this.typedContent , inputId: this.input})
      },  
      immediate: true
    }
  },

  methods: {
    ...mapActions(['addContactInputsContent'])
  }
}
</script>

<style lang="scss" scoped>
.field {
  &__label {
    font-size: 0.875rem;
    color: $dark;
    /* margin-bottom: 4px; */
    margin-bottom: 2px;
  }

  &__input {
    border-radius: 4px;
    border: solid 1px $divisor;
    padding-left: 5px;
    margin-bottom: 14px;

    &:focus-visible {
      outline: none;
      border: 1px solid $primary;
      transition: 0.5s;
    }
  }
}
</style>