<template>
  <div class="contactForm__item">
    <p class="contact__text">Тема отправляемого сообщения</p>
    <div class="select-box">
      <div class="option-container scrollbar" :class="{ active: isOpen }">
        <div
          class="option"
          v-for="option in listOptions"
          :key="option.name"
          @click="changeTextSelector"
        >
          <input type="radio" class="select__radio" :name="option.name" />
          <label :for="option.name">{{ option.text }}</label>
        </div>
      </div>
      <div class="selected" ref="selected" @click="isOpen = !isOpen">
        Хочу знать больше о мероприятии
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "select",
  data: () => ({
    isOpen: false,
    listOptions: [
      {
        text: "Пункт 1",
        name: "select1",
      },
      {
        text: "Пункт 2",
        name: "select2",
      },
      {
        text: "Пункт 3",
        name: "select3",
      },
      {
        text: "Пункт 4",
        name: "select4",
      },
      {
        text: "Пункт 5",
        name: "select5",
      },
    ],
  }),
  methods: {
    changeTextSelector: function(event) {
      this.$refs.selected.innerHTML = event.target.lastChild.innerHTML;
    },
  },
};
</script>
