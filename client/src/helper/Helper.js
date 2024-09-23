import toast from 'react-hot-toast';

class Helper{

    ErrorToast(msg) {
        toast.error(msg, { position: "bottom-center" });
    }

    SuccessToast(msg) {
        toast.success(msg, { position: "bottom-center" });
    }

}

export const { ErrorToast, SuccessToast} = new Helper();