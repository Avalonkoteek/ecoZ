<template>
  <footer class="footer">
    <div class="container">
      <img src="../../assets/img/Footer/Logo_PG_Grants.svg" alt class="footer__logo" />
    </div>
  </footer>
</template>
<style scoped>
.footer {
  width: 100%;
  z-index: 1000;
  background: url("../../assets/img/Footer/footer-bg.svg") no-repeat;
  background-size: cover;
  background-position: bottom center;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-top: 65px;
  padding-bottom: 25px;
}
.footer > .container {
  display: flex;
  align-items: flex-end;
  height: 100%;
}
.footer__logo {
  width: 243px;
  height: auto;
}
@media( max-width: 1023px) {
  .footer__logo {
    display: none;
  }
}
@media (max-width: 680px) {
  .footer {
    height: 50px;
  }
  .footer__logo {
    display: none;
  }
}
@media (max-width: 479px) {
  .footer {
    height: 35px;
  }
}
</style>
