<template>
    <div class="components-container">
        <Button type="primary" @click="setArticle()">提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</Button>
        <div class="editor-container" v-if="ueBool">
            <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
        </div>
    </div>
</template>
<script>
    import UE from '../../components/ue/ue.vue';
    import {mapActions} from 'vuex';

    export default {
        components: {UE},
        name: 'cusSuport',
        data () {
            return {
                ueBool:false,
                value: '',
                lan: {},
                defaultMsg: '',
                config: {
                    initialFrameWidth: null,
                    initialFrameHeight: 350
                },
                ue1: "ue3", // 不同编辑器必须不同的id
            };
        },
        mounted () {
            this.getMsg()
        },
        watch:{      //监听路由变化
            $route( to , from ){
                this.getMsg()
            }
        },
        methods: {
            ...mapActions([
                'storeArticle',
                'getArticle'
            ]),
            setArticle () {
                let content = this.$refs.ue.getUEContent(); // 调用子组件方法
                var data={
                    title:"客户支持",
                    type : 1,
                    content : content,
                    id:6
                }
                this.storeArticle(data).then(res => {
                    if (res.data.errcode === '0') {
                        this.$Message.success('submit success');

                    } else {
                        this.$Message.success('submit error');
                    }
                });
            },
            getMsg () {
                var d = 1;
                this.getArticle({d}).then(res => {
                    console.log(res.data.errcode === '0')
                    if (res.data.errcode === '0') {
                        var d=res.data.data;
                        for(var i in d){
                            if(d[i].id==6) {
                                this.defaultMsg=d[i].content;
                                this.ueBool=true;
                            }
                        }
                    }
                });
            },
        }
    };
</script>
<style>
    .input-css {
        width: 230px;
        margin: 10px;
    }
</style>
