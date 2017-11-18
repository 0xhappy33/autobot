$(document).ready(function () {
    $("#add-ai-rule").click(function () {
        var question = $("#keyword").val();
        var answer = $("#answerkeyword").val();

        var sendInfo = {
            question: question,
            answer: answer,
            type: 'guess',
            page: '5a0f8f59b882e855933222d7'
        };

        console.log('data', sendInfo);

        $.ajax({
            type: "POST",
            url: "http://192.168.1.68:3001/questions",
            dataType: "json",
            data: sendInfo,
            success: function (msg) {
                if (msg) {
                    alert("Some body " + name + " was added to list");
                } else {
                    alert("Some thing wrong");
                }
            }

        });
    });

});




