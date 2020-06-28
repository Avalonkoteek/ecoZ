<template>
  <div class="checkbox">
    <input v-bind="$attrs" type="checkbox" id="checkbox-a" name="checkbox" />
    <label for="checkbox-a" class="checkbox__text" v-html="prop"></label>
  </div>
</template>
<script>
export default {
  name: "checkbox",
  data: () => ({
    prop:
      '<p class="importand-field">Я соглашаюсь с <a href="#">политикой обработки персональных данных</a></p>'
  })
};
</script>
