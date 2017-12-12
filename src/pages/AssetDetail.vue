<template>
  <div class="goods">
    <van-swipe class="goods-swipe">
      <van-swipe-item v-for="thumb in details.thumb" :key="thumb">
        <img :src="thumb">
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ details.title }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="12" v-for="(item, index) in details.parms" :key="index">{{item.name}}：{{item.value}}</van-col>
        <!-- </van-cell> -->
        <!-- <van-cell class="goods-express"> -->
        <van-col span="24" v-for="(item, index) in details.organization" :key="index">{{item.name}}：{{item.value}}</van-col>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">资产亮点</div>
        <van-cell class="goods-express">
          <van-col span="24" v-for="(item, index) in details.spot" :key="index">{{item.name}}：{{item.value}}</van-col>
        </van-cell>
      </van-cell>
      <van-cell>
        <div class="goods-title">受公理事项</div>
        <van-cell class="goods-express">
          <van-col span="24" v-for="(item, index) in details.matter" :key="index">{{item.name}}：{{item.value}}</van-col>
        </van-cell>
      </van-cell>
      <van-cell>
        <div class="goods-title">交易对象及声明</div>
        <van-cell class="goods-express">
          <van-col span="24" v-for="(item, index) in details.tranStatement" :key="index">{{item.name}}：{{item.value}}</van-col>
          <van-col span="24">{{ getUsers() }}</van-col>
        </van-cell>
      </van-cell>
    </van-cell-group>
    <van-goods-action>
      <van-goods-action-mini-btn icon="like-o">
        收藏
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="chat">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn primary>
        报价
      </van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {
      details: {
        title: '华润公园九里，小户型低总价',

        thumb: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4093669240,825203326&fm=27&gp=0.jpg',
          'http://a3.att.hudong.com/65/07/01300000248343122451075325224.jpg'
        ],
        tranStatement: [
          { name: '交易对象', value: '须为大陆信用极好的用户。' }, { name: '声明', value: '以上信息纯属虚构，仅供参考。' }
        ],
        matter: [
          { name: '联系人', value: '明广振' },
          { name: '联系电话', value: '13311036150' },
          { name: '传真', value: '010-8830-3114' },
          { name: '通讯地址', value: '北京市朝阳区望京soho-T3-1701' },
        ],
        organization: [
          { name: '债券机构', value: '北京xxxxx有限责任公司' },
          { name: '债务人（企业）', value: '明广振' },
          { name: '保证人（企业）', value: '小贾' },
          { name: '抵押人', value: '小贾' },
        ],
        spot: [
          { name: '诉讼情况', value: '已经诉讼完毕，请放心购买' },
          { name: '资产保全情况', value: '保全的特别好跟新的一样' },
          { name: '核心卖点', value: '棒棒棒！！！' },
          { name: '周边配套', value: '医院、学校、公交、地铁、飞机、航空母舰' },
          { name: '小区介绍', value: '世外桃源，布莱克西' },
        ],
        parms: [
          { name: '面积', value: '100平米' },
          { name: '朝向', value: '南北' },
          { name: '户型', value: '大户型' },
          { name: '采光', value: '充足充足充足充足' },
        ]
      }
    };
  },
  methods: {
    formatPrice() {
      return '¥' + (this.details.price / 100).toFixed(2);
    },
    getUsers() {
      this.axios.get('http://localhost:8000/assets/asset_detail?id=1')
        .then(response => {
          console.log(response.data.data)
          return response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },

  }
};

</script>
<style lang="less">
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 7.5rem;
      height: 7.5rem;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px 5px 0;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
}

</style>
