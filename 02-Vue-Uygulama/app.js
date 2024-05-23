const app = Vue.createApp({
  template:`
  <h2>Başlık: {{baslik}}</h2>
  <h3>İçerik: {{icerik}}</h3>
  <p>Yorum Sayısı: {{yorumSayisi}}</p>
  <button v-on:click="ekle()">Ekle</button>        //ekle methodunu çalıştırır console logu ekler.
  <p>{{yazi}}</p>
  `,
  data() {
    return {
      baslik:'Vue Dersi',
      icerik:'Vue 3 Konuları',
      yorumSayisi: 0,
      yazi:'Yorum eklemek için tıklayın.'
    }
  },
  methods: {            //datanın methodlarını eklemek için özelliklerini belritmek için 2. butonla ile bağlı
    ekle(){
      console.log('ekle metodu çalıştı');
      this.yorumSayisi++;          //yorum sayısı bir üstte olduğu için this kullanılır.
      this.yazi=`${this.yorumSayisi} tane yorum girildi.`
    }
  },
});
  
app.mount('#app')
