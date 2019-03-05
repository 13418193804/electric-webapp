<template>
  <div>
    <cheader title="我的物料" @leftClick="leftClick"></cheader>
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
    <!-- 物料申请 -->
    <div class="material" v-if="active == 0">
        <div class="material-apply tag" @click="getApply()">申请物料</div>
        <div class="material-list" v-for="(item,index) in eqData" :key="index">
            <div class="flex flex-pack-justify material-list-dots">
                <div>{{item.create_time}}</div>
                <div>物料申请单：<span>{{item.workorder_id}}</span></div>
            </div>
            <div>关联任务单：<span>{{item.workorder_id}}</span></div>
            <div class="flex material-list-btn">
                <span  v-for="(list,listIndex) in item.lists" :key="listIndex">{{list.name+list.amount+list.units+';'}}</span>
            </div>
            <div class="flex material-list-operation">
                <div>
                    <span class="tag" v-if="item.is_get == 0">撤销</span>
                </div>
                <div>状态：<span>{{item.is_get== 0 ?'等待领取':'已经领取'}}</span></div>
            </div>
        </div>
    </div>
    <!-- 物料备用 -->
    <div class="material" v-if="active == 1">
       <div class="material-reserve">
           <!-- 扫一扫 -->
            <div class="flex material-top">
                <div class="material-top-search">
                    <md-input-item
                    ref="input0"
                    type="textarea"
                    :maxlength="200"
                    ></md-input-item>
                    <div class="material-top-search-icon"><i class="iconfont icon-sousuo"></i></div>
                </div>
                <div class="material-top-button">
                    <div class="tag"  @click="getApply()">申请物料</div>
                </div>
            </div>
            <div class="material-table">
                <div class="flex material-table-box">
                    <div class="material-table-box-list">编号</div>
                    <div class="material-table-box-list">名称</div>
                    <div class="material-table-box-list">单位</div>
                    <div class="material-table-box-list">剩余数量</div>
                    <div class="material-table-box-list"></div>
                </div>
                <div class="flex material-table-box" v-for="(item,index) in tableData.length" :key="index">
                   <div class="material-table-box-list">{{tableData[index].no}}</div>
                    <div class="material-table-box-list">{{tableData[index].name}}</div>
                    <div class="material-table-box-list">{{tableData[index].danwei}}</div>
                    <div class="material-table-box-list">{{tableData[index].no}}</div>
                    <div class="material-table-box-list"></div>
                </div>
            </div>            
            <!-- 物料列表 -->
            <div class="material-reserve-table">
                <div class=""></div>
            </div>
       </div>
       <!-- 弹窗 -->
       <md-button @click.native="showNoMask=true">点击蒙层关闭</md-button>
        <md-landscape v-model="showNoMask" :mask-closable="true">
            <div class="apply">
                <div class="apply-list">物料编码：987654</div>
                <div class="apply-list">物料名称：网线</div>
                <div class="apply-list">物料名称：个</div>
                <div class="flex apply-list">
                     <div>数量：</div>
                     <div>{{sum}} <span @click="getMinute()"><img src="../../assets/jian.png" alt=""></span> {{nowNum}} <span @click="getAdd()"><img src="../../assets/jia.png" alt=""></span></div>
                 </div>
                <div class="apply-list selectBox">
                    <div class="blockBlue"></div>
                    <select>
                        <option value ="volvo">损耗</option>
                        <option value ="saab">任务单</option>
                    </select>
                </div>
                <div class="flex flex-pack-justify apply-list">
                    <div>任务单：967678</div>
                    <div class="tag">选择任务单</div>
                </div>
                <div class="apply-list">
                    <span>备注：</span>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
                <div class="footer-btn">
                    <button class="btn btn-white">取消</button>
                    <button class="btn btn-blue" @click="showNoMask=false">确定</button>
                </div>
            </div>
        </md-landscape>
    </div>
    <!-- 物料使用记录 -->
    <div class="material" v-if="active == 2">
        <div class="material-reserve">
           <!-- 扫一扫 -->
            <div class="flex material-top">
                <div class="material-top-search">
                    <md-input-item
                    ref="input0"
                    type="textarea"
                    :maxlength="200"
                    ></md-input-item>
                    <div class="material-top-search-icon"><i class="iconfont icon-sousuo"></i></div>
                </div>
                <div class="material-top-button">
                    <div class="tag">申请物料</div>
                </div>
            </div>
            <div class="material-table">
                <div class="flex material-table-box">
                    <div class="material-table-box-list">编号</div>
                    <div class="material-table-box-list">名称</div>
                    <div class="material-table-box-list">单位</div>
                    <div class="material-table-box-list">剩余数量</div>
                    <div class="material-table-box-list">使用情况</div>
                </div>
                <div class="flex material-table-box" v-for="(item,index) in tableData.length" :key="index">
                   <div class="material-table-box-list">{{tableData[index].no}}</div>
                    <div class="material-table-box-list">{{tableData[index].name}}</div>
                    <div class="material-table-box-list">{{tableData[index].danwei}}</div>
                    <div class="material-table-box-list">{{tableData[index].no}}</div>
                    <div class="material-table-box-list"></div>
                </div>
            </div>            
            <!-- 物料列表 -->
            <div class="material-reserve-table">
                <div class=""></div>
            </div>
       </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import cheader from '../../components/header'
// import ItemVue from '../../../../../aisi/caipiao/ssc-manager/src/views/layout/components/Sidebar/Item.vue';
import {Landscape, Toast, Button} from 'mand-mobile'
export default {
  name: 'landscape-demo',
    components: {
      cheader,
      [Landscape.name]: Landscape,
      [Button.name]: Button
  },
  data () {
    return {
      pagesize: 10,
      pageindex: 1,
      active: 0,
      tabs: [{titile: '物料申请单'}, {titile: '我的备用物料'}, {titile: '物料使用记录'}],
      eqData:[],// 物料列表
      quoteData: [], // data
      tableData: [{no:'001',name:'物料1',danwei:'艾斯'},{no:'002',name:'物料2',danwei:'艾斯2'}],
      showNoMask: false,
      sum:11,
      nowNum: 1
    }
  },
  mounted () {
    this.getDataList()
  },
  methods: {
    /* 蒙层 */
    alert(msg) {
      Toast.succeed(msg)
    },
    getMinute(){
        if(this.nowNum === 1){
            return
        } else {
            this.nowNum = this.nowNum - 1
        }
    },
    getAdd(){
        if(this.nowNum === this.sum){
            return
        } else {
            this.nowNum = this.nowNum + 1
        }
    },
    /* end */
    leftClick(){
        this.$router.go(-1)
    },
    handelClick (index) {
      this.active = index
      if (this.active === 0) {
      }
      if (this.active === 1) {
      }
      if (this.active === 2) {
      }
    },
    leftClick(){
        this.$router.push('/')
    },
    getApply(){
        this.$router.push({name:'materialList'})
    },
    /* api */
    getDataList() {
      this.$toast.loading('加载中...');
    //   let list = this.eqData[active] || [];
    //   this.eqData[active] = [];
      let data = {
        token: this.$store.getters.getToken,
        pagesize: this.pagesize,
        pageindex: this.pageindex
      };
    //   if (this.onlineActiveList[active] != null) {
    //     Object.assign(data, {
    //       online: this.onlineActiveList[active]
    //     });
    //   }
      this.service
        .httpRequest({
          url: "/aapi/materialorder",
          methods: "get",
          data: data
        })
        .then(res => {
           this.$toast.hide()
          if (res.returnStatus) {
            // if (res.data.data.length !== this.pagesize) {
            //   this.forceUpdate(false);
            // }
            // res.data.data.forEach(item => {
            //   list.push(item);
            // });
            // this.eqData[active] = list;
            // this.active = active;
            // this.eqData.push();
            this.eqData = res.data.data
            console.log(res.data.data)  
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        //   if (this.$refs.scrollView) {
        //     // 停止刷新
        //     this.$refs.scrollView[0].finishLoadMore();
        //   }
        });
    },
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
.material{
    margin-top:100*@rpx;position: relative;padding: 6% 5% 5% 5%;
    &-apply{
        position: absolute;right: 35*@rpx;top: -12*@rpx;
    }
    &-list{
        div{
            margin-bottom: 10*@rpx;
        }
        &-dots{
            i{
                 width: 5px;height: 5px;border-radius: 50%;background: #4699ff;display: inline-block;
            }
        }
        &-btn{
            border:1px solid #7e7e7e;line-height: 56*@rpx; padding: 0 5px;border-radius: 5px;margin-bottom: 15*@rpx!important;
        }
        &-operation{
            align-items:center;overflow: hidden;
            div{
                float: left;width: 60%;
            }
            :nth-of-type(2){
                float: right;width: 40%;
            }

        }

    }

    // 扫一扫
    &-top{
        width: 90%; margin: 0*@rpx auto;height: 80*@rpx;justify-content:space-between;
        &-search{
            width: 75%;position: relative;
            .md-input-item .md-input-item-control .md-input-item-fake, .md-input-item .md-input-item-control .md-input-item-input{
                border:1px solid #eee;border-radius: 5px;height: 35px;padding-left:10px;
            }
            &-icon{
                position: absolute;right: 0;width: 30px;height: 30px;top: 0;line-height: 35px;
            }
        }
        &-button{
            padding-top:15*@rpx;
        }
    }
    // table
    &-table{
        width: 90%;margin:20*@rpx auto 0;
        &-box{
            border-top:1px solid #999;
            border-left:1px solid #999;
            &-list{
                width: 20%;text-align: center;border-right: 1px solid #999;padding: 3px 0;
            }
        }
    }
}
.material-table-box:last-child{
    border-bottom: 1px solid #999;
}
// 蒙层
.apply{
    background: #fff;padding:20*@rpx; border-radius: 10*@rpx;
    &-list{
        margin-bottom: 10*@rpx;font-size: 24*@rpx;
        div{
            font-size: 24*@rpx;
            span{
                font-size: 24*@rpx;
            }
            textarea{
                width: 100%;height: 100*@rpx;border: 1px solid #ddd;resize: none;
            }
        }
        img{
            width: 15px;height: 15px;vertical-align: middle;
        }
        span{
            margin-bottom: 10*@rpx;font-size: 24*@rpx;display: inline-block;
        }
    }
    .selectBox{
        position: relative; width: 200*@rpx;
        .blockBlue{
            position: absolute;right: 0;width: 40*@rpx;background: #409EFF;height: 50*@rpx;
        }
        select{
            width: 200*@rpx;height: 50*@rpx;font-size: 22*@rpx;outline: none;
            padding-left:10*@rpx;
            border:1px solid #409EFF;
            // -webkit-appearance: none;
            // -moz-appearance: none;
            // appearance: none;
        }
        option{
            font-size: 22*@rpx;
        }
    }
}
.md-landscape-content{
    width: 550*@rpx!important;
}
</style>
