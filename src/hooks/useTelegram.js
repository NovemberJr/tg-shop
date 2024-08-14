const tg = window.Telegram.WebApp

const useTelegram = () => {
    const close = tg.close()

    const toggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    return {
        close,
        toggleButton,
        tg,
        user: tg.initDataUnsafe?.user
    }
}

export default useTelegram