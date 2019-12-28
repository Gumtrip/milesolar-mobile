<template>
  <div id="MsgBox" class="mainBox">
    <div id="contactInfo">
      <h4 class="text_center">Contact Info</h4>
      <mt-cell value="info@milesolar.com" to="mailto:info@milesolar.com">
        <span slot="title"><i class="fa fa-envelope"></i> Email:</span>
      </mt-cell>
      <mt-cell value="008613889943867" to="tel:008613889943867">
        <span slot="title"><i class="fa fa-mobile"></i> Phone:</span>
      </mt-cell>
      <mt-cell value="13812341234@qq.com" >
        <span slot="title"><i class="fa fa-skype"></i> Skype:</span>
      </mt-cell>
    </div>

    <section v-if="product" id="productInfo">
      <h2 class="text_center">Product Info</h2>
      <div id="product">
        <div class="flexPic">
          <img :src="product.main_image" :alt="product.title">
        </div>
        <div class="desc">
          <h3 v-text="product.title"></h3>
        </div>
      </div>

    </section>

    <h2 class="text_center">Message</h2>
    <h3>If You Have Any Suggestions or Question For Us.Please Contact Us.</h3>
    <div>
      <mt-field v-model="form.name" class="input required" :attr="{required:true}" label="Name:" placeholder="Please Input Your Name">
      </mt-field>
      <mt-field v-model="form.phone" class="input" label="Mobile:" placeholder="Please Input Your Mobile" type="tel">
      </mt-field>
      <mt-field v-model="form.email" class="input required" :attr="{required:true}" label="Email:" placeholder="Please Input Your Email" type="email">

      </mt-field>
      <mt-field v-model="form.skype" class="input" label="Skype:" placeholder="Please Input Your Skype">
      </mt-field>
      <mt-field v-model="form.msg" class="input required" :attr="{required:true}" label="Message:" placeholder="Please Input Your Message" type="textarea">
      </mt-field>
      <mt-button class="submitBtn" size="large" type="primary" @click="submitForm">Submit</mt-button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      form: {
        product_id: null,
        product_info: null,
        name: '',
        phone: '',
        email: '',
        skype: '',
        msg: ''
      },
      product: {}
    }
  },
  computed: {},
  created() {
    const query = this.$route.query
    this.form.product_id = query.product_id

    if (this.form.product_id) {
      this.getProduct(this.form.product_id)
    }
  },
  methods: {
    async submitForm() {
      try {
        const res = await this.$api.storeMsg(this.form)
        if (res.status === 201) {
          MessageBox({
            'title': 'Message',
            'message': 'Thanks For Your Message!',
            'confirmButtonText': 'OK'
          }).then(() => {
            this.form.name = ''
            this.form.phone = ''
            this.form.email = ''
            this.form.skype = ''
            this.form.msg = ''
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    getProduct(id) {
      this.$api.product(id).then((response) => {
        this.product = response.data
        this.form.product_id = id
        this.form.product_info = response.data
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";
  #MsgBox {padding-top: 20px;
    .input /deep/ {
      &.required .mint-cell-title:after{content: '*';color: $red}
      input,textarea{border: 1px solid $light_grey;border-radius: 5px;padding: 6px 10px;box-sizing: border-box}}
    h2{margin-bottom: 10px}
    h3{margin-bottom: 20px;font-size: 16px;color: #666;padding-left:  10px}
    p{padding-left: 10px;color: #555}
    .submitBtn{margin-top: 10px}
  }
  #productInfo{margin-bottom: 10px;box-sizing: border-box;;
    #product{display: flex;
      .flexPic{border: 1px solid $light_grey;border-radius: 5px;width: 35%;box-sizing: border-box;overflow: hidden}
      .desc{width: 65%;box-sizing: border-box;padding-left: 10px}
    }
    h3{padding: 5px 0;font-size: 16px;color: $grey}
  }

  #contactInfo{margin-bottom: 20px;
    .fa{display: inline-block;width: 20px;}
    .fa-mobile{font-size: 26px}
    .fa-skype{font-size: 20px}
    h4{margin-bottom: 10px;font-size: 24px}
    color: #555;
  }
</style>
