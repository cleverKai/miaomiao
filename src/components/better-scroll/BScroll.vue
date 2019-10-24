<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    //引入better-scroll
    import BScroll from 'better-scroll'
    export default {
        name: "BScroll",
        props :{
            handleToScroll :{
                type:Function,
                default:function () {}
            },
            handleToTouchEnd :{
                type:Function,
                default:function () {}
            }
        },
        mounted() {
            const scroll = new BScroll( this.$refs.wrapper , {
                //在better-scroll 里面开启tap事件（移动端点击,滑动时不触发，点击时才触发）
                tap : true,
                probeType: 1, //滚动时会触发scroll事件，会截流
            });
            this.scroll = scroll;
            //滚动触发
            scroll.on('scroll',(pos)=>{
                this.handleToScroll(pos);
            });
            //滚动结束后触发
            scroll.on('touchEnd',(pos)=>{
                this.handleToTouchEnd(pos);
            });
        },
        methods :{
            toScrollTop(y){
                this.scroll.scrollTo(0,y)
            }
        }
    }
</script>

<style scoped lang="css">
    .wrapper{
        height: 100%;
    }
</style>