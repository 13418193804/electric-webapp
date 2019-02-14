<template>
  <div>
    <cheader title="我的物料" @leftClick="leftClick"></cheader>
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
    <!-- 物料申请 -->
    <div class="material" v-if="active == 0">
        <div class="material-list">
            <div class="material-list-dots"><i></i> 2018-12-11 12:22:22</div>
            <div>关联任务单：<span>2018297836263</span></div>
            <div class="flex material-list-btn">A0997-C征集上海市；保护卡个</div>
            <div class="flex material-list-operation">
                <div class="tag">申请物料</div>
                <div>状态：<span>等待领取</span></div>
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
                    <div class="tag">申请物料</div>
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

export default {
  name: 'HelloWorld',
    components: {
      cheader,
  },
  data () {
    return {
      active: 0,
      tabs: [{titile: '物料申请单'}, {titile: '我的备用物料'}, {titile: '物料使用记录'}],
      quoteData: [], // data
      tableData: [{no:'001',name:'物料1',danwei:'艾斯'},{no:'002',name:'物料2',danwei:'艾斯2'}]
      
    }
  },
  mounted () {
      
  },
  methods: {
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
    }
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
.material{
    padding: 5%;margin-top:100*@rpx;
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
            justify-content:space-between;align-items:center;
            .tag{
                font-size: 20px*@rpx;border: 1px solid #4699ff;border-radius: 50px; padding: 0 6px;
            }
        }

    }

    // 扫一扫
    &-top{
        width: 90%; margin: 0*@rpx auto;height: 80*@rpx;justify-content:space-between;
        &-search{
            width: 75%;position: relative;
            .md-input-item .md-input-item-control .md-input-item-fake, .md-input-item .md-input-item-control .md-input-item-input{
                border:1px solid #eee;border-radius: 5px;height: 35px;
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

</style>
