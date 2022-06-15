// 获取用户基本信息
function getUserInfo(){
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success: function(res){
            if(res.status !==0 ){
                return layer.msg('获取用户信息失败')
            }
            // 调用渲染用户头像函数
            rnedrAvart(res.data)
        },
        // complete: function(res){
        //     if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！'){
        //         localStorage.removeItem('token')
        //         location.href = '/login.html'
        //     }
        // }
    })
}
getUserInfo()

function rnedrAvart(user){
    // 获取用户名称
    let name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)

    // 判断有无头像
    if(user.user_pic !== null){
        // 渲染图片头像
        $('.layui-nav-img')
        .attr('src',user.user_pic)
        .show()
    }else{
        // 渲染文本头像
        $('.layui-nav-img').hide()
        let first = name[0].toUpperCase()
        $('#text-avart').html(first).show()
    }

}

// 退出操作

$('#btnLogOut').click(function(){
    layer.confirm('确定退出登录?', {icon: 3, title:'提示'}, function(index){
        //do something
        // 清空本地存储
        localStorage.removeItem('token')
        // 跳转登录页面
        location.href = './login.html'
        layer.close(index);
      });
})