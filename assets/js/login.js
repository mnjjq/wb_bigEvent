const loginAndRegBox = document.querySelector('.loginAndRegBox')
const loginBox =document.querySelector('.login-box')
const regBox =document.querySelector('.reg-box')


;(function(){
    let falg = true
loginAndRegBox.addEventListener('click',function(e){
    if(e.target.tagName === 'A'){
        if(falg){
            loginBox.style.display = 'none'
            regBox.style.display = 'block'
        }else{
            loginBox.style.display = 'block'
            regBox.style.display = 'none'
        }
    }
    falg = !falg
})
}());


;(function(){
    let form = layui.form
form.verify({
    pass: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] ,
      repass: function(value){
        let pwd = document.querySelector('.reg-box [name=password]').value
        if(pwd !== value){
            return '两次密码不一致'
        }
      }
})
}());

    let key = document.querySelector('.login-box [name=username]')
    let val = document.querySelector('.login-box [name=password]')
    const reg = document.querySelector('#reg')
    const url = 'http://www.liulongbin.top:3007'
    reg.addEventListener('submit',function(e){
        e.preventDefault()
        let username = document.querySelector('.reg-box [name=username]').value
        let password = document.querySelector('.reg-box [name=password]').value
        
        
        $.post(`${url}/api/reguser`,{username:username,password:password},function(res){
            if(res.status !== 0){
                return console.log(res.message);
            }
            console.log(res);
            key.value = username
            val.value = password
            loginBox.style.display = 'block'
            regBox.style.display = 'none'
        })
        
        
})


    let login = document.querySelector('#login')
    login.addEventListener('submit',function(e){
        e.preventDefault()
        let username = document.querySelector('.reg-box [name=username]').value
        let password = document.querySelector('.reg-box [name=password]').value
        $.post(`${url}/api/login`,$(this).serialize(),function(res){
            if(res.status !== 0){
                return console.log(res.message);
            }
            console.log(res.token);
            localStorage.setItem('token',res.token)
            location.href = './index.html'
        })
    })

