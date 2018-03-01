<template>
    <div class="login">
        <section>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-position="left" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="uname">
                    <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="upwd">
                    <el-input type="password" v-model="ruleForm2.upwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success"  @click="submitForm('ruleForm2')">登陆</el-button>
                    <el-button @click="resetForm('ruleForm2')" class="resetBtn">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
        //  module双向数据绑定获取输入的用户名和密码
      ruleForm2: {
        uname: "",
        upwd: ""
      },
    //    element-ui  提供的验证表单的方法
      rules2: {
        uname: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        upwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //    点击登录的函数
    submitForm(formName) {
        //    $refs获取dom对象的绑定的值
      this.$refs[formName].validate(valid => {
        // 验证有输入东西就发送登录的请求
        if (valid) {
          this.$axios
            .post(this.$api.login, this.ruleForm2)
            .then(res => {
                if(res.data.status==0){
                     console.log(res);
                      this.$alert("登录成功","提示",{
                          callback:()=>{
                                // 登录成功把数据存到localStorage里面
                            localStorage.setItem("uname",res.data.message.uname);
                             this.$router.push({name:"admin"})
                          }
                      });
                }else{
                    this.$alert("用户名或者密码错误");
                }
            })
           
        } else {
          this.$alert("请输入用户名或者密码");
          console.log(1);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style scoped lang="less">
/* scoped表示只能当前组件有用 */

.login {
  height: 100%;
//   background-color: aqua;
  box-shadow: border-box;
  section {
    height: 200px;
    padding:50px 40px;
    width: 320px;
    margin: 0 auto;
    border: 1px solid #000;
    border-radius: 5px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    .resetBtn{
        margin-left: 40px;
    }
  }
}
</style>