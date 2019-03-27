<template>
  <div class="taskBox">
      <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <!-- <header><div class="back"><i class="icon"></i></div>我的任务</header> -->
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
     <div v-for="(quote,quoteIndex) in tabs" :key="quoteIndex" v-if="quoteIndex === active" > 
        <!-- 新任务 -->
        <div>
           <better-scroll ref="betterScroll" @onPullingUp="onPullingUp"  marginTop="100px">
            <template slot="list-content">
                
                <div class="scroll-view-list taskList taskNew"  v-if="active == 0">
                    <ul v-if="quoteData[active].length > 0">
                        <li v-for="(item,index) in quoteData[active]" :key="index" class="scroll-view-list" @click="getDetails(item.id)">
                            <div>
                                <p>{{item.create_time}}</p>
                                <h4> 设备编号：<span>{{item.device_sn}}</span></h4>
                                <h4> 设备名称：<span>{{item.device_name}}</span></h4>
                                <h4> 报警：<span>{{item.fault}}</span></h4>
                                <h4 v-if="item.is_emergency"> <i class="icon"><img src="../../assets/01.png" alt=""></i>紧急</h4>
                                <span class="tag">{{quoteTypeEnum[item.type]}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="noneData" v-else>
                        <i class="iconfont icon-zanwushuju"></i>
                        <p>暂无数据</p>
                    </div>
                </div>
                
                 <!-- 处理中 -->
                <div class="scroll-view-list taskList" v-if="active == 1" >
                    <ul v-if="quoteData[active].length > 0">
                        <li v-for="(item,index) in quoteData[active] " :key="index" @click="getProgeess(item.id)">
                            <div>
                                <p> 订单时间：{{item.create_time}}</p>
                                <h4> 设备编号：<span>{{item.device_sn}}</span></h4>
                                <h4> 设备名称：<span>{{item.device_name}}</span></h4>
                                <h4> 报警：{{item.fault}}</h4>
                                <h4 v-if="item.is_emergency"> <i class="icon"><img src="../../assets/01.png" alt=""></i>紧急</h4>
                                <h4> 备注：<span>{{item.desp}}</span></h4>
                                <p> 最后一次更新时间：{{item.update_time}}</p>
                            </div>
                        </li>
                    </ul>
                    <div class="noneData" v-else>
                        <i class="iconfont icon-zanwushuju"></i>
                        <p>暂无数据</p>
                    </div>
                </div>
                 <!-- 处理完毕 -->
                <div class="scroll-view-list taskList"  v-if="active == 2">
                    <ul v-if="quoteData[active].length > 0">
                        <li v-for="(item,index) in  quoteData[active] " :key="index" @click="getEnd(item.id)">
                            <div>
                                <p> 订单时间：{{item.create_time}}</p>
                                <h4> 设备编号：<span>{{item.device_sn}}</span></h4>
                                <h4> 设备名称：<span>{{item.device_name}}</span></h4>
                                <h4> 报警：<span>{{item.fault}}</span></h4>
                                <h4 v-if="item.is_emergency"> <i class="icon"><img src="../../assets/01.png" alt=""></i>紧急</h4>
                                <!-- <h4> 问题：<span>{{item.fault}}</span></h4> -->
                                <h4> 备注：<span>{{item.desp}}</span></h4>
                                <p> 最后一次更新时间：{{item.update_time}}</p>
                            </div>
                        </li>
                    </ul>
                    <div class="noneData" v-else>
                        <i class="iconfont icon-zanwushuju"></i>
                        <p>暂无数据</p>
                    </div>
                </div>
            </template>
         </better-scroll>
        </div>
    </div>
  </div>
</template>

<script>
// import { ScrollView, ScrollViewRefresh } from "mand-mobile";
import cheader from "../../components/header";
import betterScroll from "../../components/better-scroll";
import { mapMutations } from "vuex";

export default {
  name: "scroll-view-demo-0",
  components: {
    cheader,
    betterScroll
    // [ScrollView.name]: ScrollView,
    // [ScrollViewRefresh.name]: ScrollViewRefresh
  },
  data() {
    return {
      ...mapMutations(["setTaskId"]),
      active: 0,
      tabs: [
        { titile: "新任务" },
        { titile: "处理中" },
        { titile: "处理完毕" }
      ],
      quoteData: [], // data
      quoteList: [
        {
          beenQuote: [{ text: "新任务" }, { text: "2019男装潮流冷帽" }],
          noQuote: [{ text: "处理中" }],
          prohibituote: [
            { text: "处理完毕" },
            { text: "潮流潮流潮流潮流潮流潮流潮流潮流潮流" }
          ]
        }
      ],
      list: 3,
      isIndex: null,
      isFinished: true,
      pagesize: 10,
      pageindex: 1,
      quoteTypeEnum: {
        "0": "自动派单",
        "1": "手动派单",
        0: "自动派单",
        1: "手动派单"
      }
    };
  },
  mounted() {
    console.log(this.$route);
    if ((this.$route.query.active || "") != "") {
      this.active = parseInt(this.$route.query.active);
    }
    this.getDataList(this.active);
    window.ScrollViewTrigger1 = () => {
      this.$refs.scrollView.triggerRefresh();
    };
  },
  methods: {
    onPullingUp() {
      if (!this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.pageindex += 1;
        this.getDataList(this.active);
      }, 1000);
    },

    forceUpdate(status) {
      //  isFinished   判断当前是否可以继续加载
      //  然后设置子组件可否加载的状态
      this.isFinished = status;
      if (this.$refs.betterScroll) {
        this.$refs.betterScroll[0].forceUpdate(status);
      }
    },
    /* api */
    getDataList(active) {
      this.$toast.loading("加载中...");
      let list = this.quoteData[active] || [];
      this.quoteData[active] = [];
      let data = {
        token: this.$store["getters"].getToken,
        status: active,
        pagesize: this.pagesize,
        pageindex: this.pageindex
      };
      this.service
        .httpRequest({
          url: "/aapi/workorder",
          methods: "get",
          data: data
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.$nextTick(() => {
              this.forceUpdate(true);
            });

            if (res.data.workorder_list.length !== this.pagesize) {
              this.$nextTick(() => {
                this.forceUpdate(false);
              });
            }
            res.data.workorder_list.forEach(item => {
              list.push(item);
            });
            this.quoteData[active] = list;
            console.log("res", this.quoteData[active]);
            this.active = active;
            this.quoteData.push();
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
          if (this.$refs.scrollView) {
            // 停止刷新
            this.$refs.scrollView[0].finishLoadMore();
          }
        });
    },
    leftClick() {
      this.$router.push("/");
    },
    handelClick(index) {
      if (this.active === index) {
        return;
      }
      this.pageindex = 1;
      this.forceUpdate(true);
      this.quoteData[index] = [];
      this.getDataList(index);
    },
    $_onRefresh() {
      // async data
      setTimeout(() => {
        this.list += 5;
        this.$refs.scrollView.finishRefresh();
      }, 2000);
    },
    checkMessage() {
      this.service
        .httpRequest({
          url: "/aapi/message",
          methods: "post",
          data: {
            token: this.$store.getters.getToken,
            id: item.workorder_id,
            type: 1
          }
        })
        .then(res => {
          if (res.returnStatus) {
            console.log('已读')
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
      });
    },
    getDetails(id) {
      this.service
        .httpRequest({
          url: "/aapi/message",
          methods: "post",
          data: {
            token: this.$store.getters.getToken,
            id: id,
            type: 1
          }
        })
        .then(res => {
          if (res.returnStatus) {
            this.setTaskId(id);
            this.$router.push({
              name: "taskDetails"
            });
            console.log('已读')
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
      });
    },
    getProgeess(id) {
      this.setTaskId(id);
      this.$router.push({
        name: "taskProgress"
      });
    },
    getEnd(id) {
      this.setTaskId(id);

      this.$router.push({
        name: "taskDetails"
      });
    }
  }
};
</script>


<style lang="less">
@import "../../../static/css/common.less";
.taskBox {
  .taskList {
    padding: 0% 5%;
    // padding-top: 100px * @rpx;
    ul {
      width: 100%;
      height: 100%;
      overflow: hidden;
      li {
        position: relative;
        padding: 20 * @rpx;
        border-top: 2px * @rpx solid #eee;
        padding-left: 20 * @rpx;
        div {
          text-align: left;
          p {
            font-size: 26px * @rpx;
            width: 80%;
            height: 40px * @rpx;
          }
          h4 {
            font-size: 24px * @rpx;
            width: 80%;
            height: 40px * @rpx;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            // padding-left: 12px;
            span {
              font-size: 24px * @rpx;
            }
          }
          span.tag {
            font-size: 20px * @rpx;
            position: absolute;
            right: 0;
            top: 20px * @rpx;
            border: 1px solid #4699ff;
            border-radius: 50px;
            padding: 0 6px;
          }
        }
      }
      :nth-of-type(1) {
        border: 0;
      }
    }
  }
  .taskNew ul li:nth-of-type(1) div p {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKL2lDQ1BJQ0MgUHJvZmlsZQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s3BCkeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIXRFWHRDcmVhdGlvbiBUaW1lADIwMTk6MDE6MjUgMTA6Mzg6NDCi/0N6AAAFyUlEQVRoQ+WbeYxTRRzH5zfdwy10tdtjkati0Gg0atTEYCKISNg/MCFGJYHERAlm1UXEPTRRQdQ/zB4g8chGOSJiooZ43yYIEkOiEEM0qAmyXAlLu6/dQ5Zl287P38ybFkq73VK6S/veJ3n9Ha9t5ts53sx7U0BENt7w+hNOl4s5ETh3nBqO9v11aEDsmBPTp8eNMRXvaghNqnTCbEB2GwO4kVIz6ZhGR5U8fw6yEAaZw2T/RgH7mRB7wvG+vWLDzDPqHWNAwcVf8XTPNWUVsJQEL2LAbqIUmGfyANl/9LJDMPg4MjD8qei8clCfKQgFEc/5Wu5+pmEh52wVhXPoyF/wCFAp++hlq4DY+nBrbZdOXxQXLd7T1LOQA7xKcm/WqbEmRkXeCsNDa0IbphzXubzIW3xNy8kZDlb2Nrl1ZmacoS5BJX8lvO/PdfkOlnmJ9zYb9QCsg1ynmbmk7ItG2dLe9Z5/dJwzFySeN4Qm1jj5ZurQD+pUcSBbAeDynlbvhzqTEzmL9zUen8IcVV+Re4uZKTqkkpfD7b61QoicRHFts+JuDF5NwneTW6zCJdQT2RpPU/BNefXRuayMWvOe5u4Ah/KfyZ1uZkoAxE6jw//EaC0g6y/kfvKYm0PZd+SWjnAJQL2nMfiijkZkRPF88XaHw+n8iL7pOp0qLQBe8jWHHtBRRkYUXzN97mrqRPN1WIoAA75ZTrd1nEZG8d6W4CwS/rwOSxkXrTPel61YxymkieeLD1Qw5niX3IwfKDXoCnCHJ3D3Ch2mkCa+JuBvoA/coEOrsLZ6VbBW+0lSxHvquy6njvKCDi0EVFeUO9J0pYjnLpdsHm4zshbUmpdPfMqYrENFUjxfebCS3tKgQytSWXUZpuhLiq+pcN9PP09av7AUCI+aA7pJUjxd2h7WrnWhynUHahfoyBQvp7Fk5knf6nDE5HJciXdMqJIzuXLpWx6AusSqT70AsrnS2gSfu+lxeRs90edhlmntATCH0svV6AfsepW1CcBQ3Wnm1dP8V5FNDv+2ANm10vByEAGVsBMASjMX4PCphI1AGvSk5TTSV6uMjaB5vktaTp3fHtf3VDi/Z1cZFwjj/ly8CEC2c26ccxAFfexbIgzK29qy5g2dsBNKM83w8JgK7QQy9WibR3r5IRXaCcCD0nCx0TNA0rtU0iaggD+kNRc2wH5V1iYgoNKrxAvB5INIu3A6Ypw6Kx55TD6MtAs7xebAkHSUeL276XfpWx1E/ES7us8TiOwD7VqZobgYShcfHY5uJTNmux2LA9we6Zga1sFZ8X0bJoXoYr9Nh5YkhvC6dhVJ8ZJ4XLxGxqoLnW8jbZ592lekiI90+Gjmg5t0aCVEHDFtv0GKeMkZFl9NJmJGlmFTuM2bdjVLE9/fWhukob9Jh1agO3Zq8Fntp5AmXmJ0+LeQ+dKMShpEgcsib03L2JIzipcL/ejpM4+QKzf/lzDY2tPu/UYHaWQUL+l9Y7JBP8IicgfMTMnxtXFkZ9ZNVaPuwPQ2hxYA8M/JrTQzpQD+ZoRhnlquZ2HEmk/Q0+b7nlZ9D5FbIrM/3BuLD9WNJlwyqniJ0e75gmH8Pvrifp0qThB/Ev0D9547hc1GTuIloTb/j4KJuxgyedur+EC20TgarDM6Z/TpzKjkvN8+gdzF4ZjgfAcYy7qvdRwZYChWhNp87+k4Zy5YfAJPi7GEmo1cKFyyZ31U8h8Ei9Xn+2+rvMVLVCtwOtcAsHoKx/Nq8C/V9nNU29t1nBcXJT6BZ9WJ6VBe0UhdYRmFE8xs4aGSHgCG7Ub/0W2i89aoTudNQcQnkNtX2cTqJZyzJRTeSUfOA2oWeqmEn1E5t0Q6/Ltz/f9MLhRU/LlUt5z0l2PZfFI/mwG7nVJy68v5/6HNRDeVaD/V8x7BYFdv/5FfClHLmRgz8eej/nK68rGp4Cibiox7gaMTGXCgZQQVoi+OLMjY4OHwukCv/sgYw9j/qlgByD2V7vkAAAAASUVORK5CYII=")
      no-repeat left center;
    background-size: 7px 7px;
    padding-left: 12px;
  }
}
</style>
