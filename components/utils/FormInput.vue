<template>
  <div class="field px-2">
    <label class="field__label d-flex flex-column" :for="`input${id}`" >{{ label }}</label>
    <!-- <br> -->
    <v-text-field
      :id="`input${id}`"
      :autofocus="autofocus"
      :style="`width: ${width}; height: ${height};`"
      :value="value"
      :required="required"
      :type="inputType"
      class="field__input"
      v-model="typedContent"
      autocomplete="off"
      dense
      outlined
      v-mask="mask"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'form-input',
  props: {
    id: {
      type: Number,
      default: 0,
    },
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
    autofocus: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: String,
    },
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
    margin-bottom: 14px;

    &:focus-visible {
      outline: none;
      border: 1px solid $primary;
      transition: 0.5s;
    }
  }
}
</style>