
Page({
  data: {
    tags: [
      "推荐",
      "附近",
      "视频",
      "时尚",
      "护肤",
      "彩妆",
      "美食",
      "旅行",
      "影视",
      "读书",
      "明星",
      "健身",
      "家居",
      "宠物",
      "音乐",
      "婚礼",
      "母婴",
      "萌娃",
      "数码",
      "汽车",
      "男士穿搭"

    ],
    // lists: [
    //   {
    //    imagePic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557719421977&di=42035b4ffdbccf9435c382e4301421b2&imgtype=0&src=http%3A%2F%2Fimg1.soyoung.com%2Ftieba%2Fweb%2F20141113%2F1%2F20141113155219460_570.jpg',
    //     name:'根据脸型的不同，选择不同的发型'
    
    //   },
    //   {}
    // ],
    left: 0,
  },
  onLoad() {
  },
  // 导航条鼠标跟随
  fnclick(ev) {
    this.setData({
      left: ev.target.offsetLeft
    })

  },

  // 实现页面的跳转
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
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