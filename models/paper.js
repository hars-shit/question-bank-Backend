const { default: mongoose } = require("mongoose");

const PapersSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    pdf_link:{
        type:String,
        required:true,
    },
    is_accepted:{
        type:Number,
        required:true,
    }
},
{
    timestamps:true,
}
)

module.exports=mongoose.model("papers",PapersSchema);