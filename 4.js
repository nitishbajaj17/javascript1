
    /*copy fnctn*/
        $(function() {
            $( "#copy_0, #copy_1, #copy_2, #copy_3, #copy_4, #copy_5, #copy_6, #copy_7, #copy_8, #copy_9, #copy_10, #copy_11, #copy_12, #copy_13, #copy_14, #copy_15, #copy_16, #copy_17, #copy_18, #copy_19, #copy_20, #copy_21, #copy_22, #copy_23, #copy_24, #copy_25, #copy_26, #copy_27, #copy_28, #copy_29, #copy_30, #copy_31, #copy_34, #copy_35, #copy_36, #copy_37, #copy_38, #copy_39, #copy_40, #copy_41, #copy_42, #copy_43, #copy_44, #copy_45, #copy_46, #copy_47, #copy_48, #copy_49, #copy_50, #copy_51, #copy_52, #copy_53, #copy_54, #copy_55, #copy_56, #copy_57, #copy_58, #copy_59, #copy_60, #copy_61, #copy_62, #copy_63, #copy_64, #copy_65, #copy_66, #copy_67, #copy_68, #copy_69, #copy_70, #copy_71, #copy_72, #copy_73, #copy_74, #copy_75, #copy_76, #copy_77, #copy_78, #copy_79, #copy_80, #copy_81, #copy_82, #copy_83, #copy_84, #copy_85, #copy_86, #copy_87,#copy_88, #copy_89").click(function() {
            $(this).focus();
            $(this).select();
            document.execCommand('copy');
            $(".copied").text("✅ Copied..:)").css({"background-color": "tomato", "fontSize": "16px"}) .show().fadeOut(1200);
            });
        });
