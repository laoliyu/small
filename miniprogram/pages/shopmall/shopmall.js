// miniprogram/pages/shopmall/shopmall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tags: [
      { nane: '推荐', id: '1' },
      { name: '彩妆', id: '2' },
      { name: '个人护理', id: '3' },
      { name: '保健品', id: '4' },
      { name: '护肤', id: '5' },
      { name: '更多', id: '6' }
    ],
  },
  switchCategory(e) {
    console.log(e);
    this.setData({
      curIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index:0,
      toView: e.currentTarget.dataset.index,
    })
  },
  seeMore(e) {
    wx.navigateTo({
      url: '../shopmall/seeMore',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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