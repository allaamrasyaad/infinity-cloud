const userModel = require('../model/User.js')
const response = require('../config/response')
const bcrypt = require('bcrypt')
const { commonError } = require('../config/response')

exports.registrasi = (data) =>
    new Promise((resolve, reject) => {
        userModel.findOne({userName: data.userName})
        .then(user => {
            if (user) {
                resolve(response.commonErrorrMsg('username sudah digunakan'))
            } else {
                bcrypt.hash(data.password,10,(err, hash)=>{
                    if (err){
                        reject(response.commonErrorrMsg)
                    } else {
                        data.password = hash
                        userModel.create(data)
                            .then(() => resolve(response.commonsuccessMsg('Berhasil Registrasi')))
                            .catch(() => reject(response.commonErrorrMsg('Mohon Maaf Registrasi Gagal')))
                    }
                })
            }
        }).catch(() => reject(response.commonError))
    })

exports.login = (data) => 
    new Promise((resolve,reject) => {
        userModel.findOne({
            userName: data.userName
        }).then(user => {
            if(user){
                if (bcrypt.compareSync(data.password,user.password)){
                    resolve(response.commonResult(user))
                }else{
                    reject(response.commonErrorrMsg('Password Salah'))
                }
            }else{
                reject(response.commonErrorrMsg('Username Tidak Ditemukan'))
            }
        })
    })