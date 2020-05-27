<template>
  <div class="checkbox">
    <clipPath id>
      <rect width="3834" height="1087" />
    </clipPath>
    <input type="checkbox" id="checkbox-a" name="checkbox" />
    <label for="checkbox-a" class="checkbox__text" v-html="prop"></label>
  </div>
</template>
<script>
export default {
  name: "checkbox",
  data: () => ({
    prop:
      '<p>Я соглашаюсь с <a href="#">политикой обработки персональных данных</a></p>'
  })
};
</script>