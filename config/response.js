module.exports = {
 
    commonError:{
        error: true,
        msg : "Terjadi Kesalahan Pada Server"
    },

    commonErrorrMsg: (msg) => {
        return {
            error: true,
            msg: msg
        }
    },

    commonSucces: {
        error: false,
        msg: 'Berhasil Memuat Permintaan'
    },

    commonsuccessMsg: (msg) => {
        return {
            error: false,
            msg: msg
        }
    },

    commonResult: (data) => {
        return {
            error : false,
            msg: 'Berhasil Memuat Data',
            data : data
        }
    }
};