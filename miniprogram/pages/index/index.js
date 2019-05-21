// pages/kinds/kinds.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [       // 导航栏内容数据
      { name: '推荐', id: '0' },
      { name: '附近', id: '1' },
      { name: '视频', id: '2' },
      { name: '时尚', id: '3' },
      { name: '护肤', id: '4' },
      { name: '彩妆', id: '5' },
      { name: '美食', id: '6' },
      { name: '旅行', id: '7' },
      { name: '影视', id: '8' },
      { name: '读书', id: '9' },
      { name: '明星', id: '10' },
      { name: '健身', id: '11' },
      { name: '家居', id: '12' },
      { name: '音乐', id: '13' },
      { name: '宠物', id: '14' },
      { name: '婚礼', id: '15' },
      { name: '母婴', id: '16' },
      { name: '萌娃', id: '17' },
      { name: '数码', id: '18' },
      { name: '男士穿搭', id: '19' },
    ],
    curIndex: 0,
    detail: [],
    toView: 'tuijian',
    scroll: true
  },
  switchCategory(e) {
    console.log(e);
    this.setData({
      curIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index:0,
      toView: e.currentTarget.dataset.index,
    })
  },
  // 搜索点击事件
  entrySearch(e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '小红书',
    })
    // 请求数据
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cd80aacab33907aaae39e4f/smallShop/',
      success: (res) => {
        this.setData({
          detail: res.data.data
        })
      }
    })  
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