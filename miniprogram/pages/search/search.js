// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchType: 0,
    hotKeyword: ['母亲节', '复仇冻干面膜', '拍立得', '姜撞奶', 'aj11', '晒后修复', '酒吧', '闺蜜', '懒人减肥', '三杯鸡', '运动凉鞋', '笔袋', '直角肩', '荔枝'],
    hotTag: ['彩妆', '美食', '影视', '读书', '旅行'],
    showTipTxt: '',
    // tipHidden: ture
  },
  changeSearchType: function () {
    var types = ['', ''];
    var that = thiswx.showActionSheet({
      itemList: types,
      success: function (res) {
        if (!res.cancel) {
          that.setData({
            searchType: res.tapIndex
          })
        }
      }
    })
  },
  suo: function (e) {
    var that = this
    var keyword = e.detail.value.keyworld
    if (keyword == '') {
      wx.showToast({
        title: '请输入你想要搜索的内容',
        icon: 'success_no_circle',
        duration: 2000
      })
      return false
    } else {
      that.tosearchResult(that.data.searchType, keyword)
    }
  },
  searchByKeyword: function (e) {
    var that = this
    var keyword = e.currentTarget.dataset.keyword
    that.tosearchResult("0", keyword)
  },
  searchByTag: function (e) {
    var that = this
    var keyword = e.currentTarget.dataset.keyword
    that.tosearchResult('1', keyword)
  },
  tosearchResult: function (sType, keyword) {
    wx.navigateTo({
      url: '../searchResult/searchResult?searchType = ' + sType + '&keyword=' + keyword
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