Page({
  data: {
    
    tags: [{
      id: 0,
      name: '推荐'
    },
    {
      id: 1,
      name: '附近'
    },
    {
      id: 2,
      name: '视频'
    },
    {
      id: 3,
      name: '时尚'
    },
    {
      id: 4,
      name: '护肤'
    },
    {
      id: 5,
      name: '彩妆'
    },
    {
      id: 6,
      name: '美食'
    },
    {
      id: 7,
      name: '旅行'
    },
    {
      id: 8,
      name: '影视'
    },
    {
      id: 9,
      name: '读书'
    },
    {
      id: 10,
      name: '明星'
    },
    {
      id: 11,
      name: '健身'
    },
    {
      id: 12,
      name: '家居'
    },
    {
      id: 13,
      name: '宠物'
    },
    {
      id: 14,
      name: '音乐'
    },
    {
      id: 15,
      name: '婚礼'
    },
    {
      id: 16,
      name: '母婴'
    },
    {
      id: 17,
      name: '萌娃'
    },
    {
      id: 18,
      name: '数码'
    },
    {
      id: 19,
      name: '汽车'
    },
    {
      id: 20,
      name: '男士穿搭'
    }
    ],
    
    left: 0,
    num: 0,
    content: '推荐',
  },


  onLoad() {
    this.setData({});
  },

  //   // 下面内容的跳转

  goDetail: function () {
    wx.navigateTo({
      url: '../detail/detail',
    })

  },



  // 实现页面的跳转
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },


  ficon: function (e) {
    console.log(e)
    let num = e.target.id
    console.log(num)
    let content = this.data.tags[num].name
    console.log(content.name)
    this.setData({
      num: num,
      content: content,
      left: e.target.offsetLeft  // 导航条鼠标跟随
    })
    console.log(this)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
