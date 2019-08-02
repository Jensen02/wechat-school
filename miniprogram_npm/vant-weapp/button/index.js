import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
VantComponent({
    mixins: [button, openType],
    classes: ['hover-class', 'loading-class'],
    props: {
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        showText: Boolean,
        text: String,
        duration: Number,
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        }
    },
    methods: {
        loadingToast() {
            this.setData({ disabled: true });
            let second = this.data.duration;
            const timer = setInterval(() => {
                second--;
                if (second >= 0) {
                    this.setData({
                        text: `已发送 ${second} 秒`
                    });
                } else {
                    clearInterval(timer);
                    this.setData({ disabled: false,text: "获取验证码" });
                }
            }, 1000);
        },
        onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.loadingToast();
                this.$emit('click');
            }
        }
    }
});
