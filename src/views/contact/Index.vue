<template>
  <div id="MsgBox" class="mainBox">
    <div id="contactInfo">
      <h4 class="text_center">Contact Info</h4>
      <mt-cell value="123456789@qq.com">
        <span slot="title"><i class="fa fa-envelope"></i> Email:</span>
      </mt-cell>
      <mt-cell value="13812341234@qq.com">
        <span slot="title"><i class="fa fa-mobile"></i> Phone:</span>
      </mt-cell>
      <mt-cell value="13812341234@qq.com">
        <span slot="title"><i class="fa fa-skype"></i> Skype:</span>
      </mt-cell>
    </div>
    <h2 class="text_center">Message</h2>
    <h3>If you have any suggestions or question for us.Please contact us.</h3>

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
        name: '123',
        phone: '321',
        email: '22dfdf2@qqq.com',
        skype: '',
        msg: '3213'
      }
    }
  },
  computed: {},
  created() {
  },
  methods: {
    async submitForm() {
      try {
        const res = await this.$api.storeMsg(this.form)
        if (res.status === 201) {
          MessageBox.alert('Thanks For Your Message!').then(() => {
            this.form = { name: '', phone: '', email: '', skype: '', msg: '' }
          })
        }
      } catch (e) {
        console.log(e)
      }
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
    .submitBtn{margin-top: 10px}
  }
  #contactInfo{margin-bottom: 20px;
    .fa{display: inline-block;width: 20px;}
    .fa-mobile{font-size: 26px}
    .fa-skype{font-size: 20px}
    h4{margin-bottom: 10px;font-size: 24px}
    color: #555;
  }
</style>
