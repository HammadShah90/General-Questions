const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".questionBtn");
    //   console.log(btn);

    btn.addEventListener("click", () => {
        // console.log(question);

            questions.forEach((item) => {
              if (item !== question) {
                item.classList.remove("showText");
              }
            });

            question.classList.toggle("showText");
          });
    });