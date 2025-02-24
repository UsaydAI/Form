document.addEventListener("DOMContentLoaded", function () {
  console.log("Time to use Javascript");
  let currentAppend = 1;
  const main = document.querySelector(".main");
  const form1 = document.querySelector(".step-1");
  const form2 = document.querySelector(".step-2");
  const form3 = document.querySelector(".step-3");
  const form4 = document.querySelector(".step-4");
  const button1 = document.querySelector(".step-one");
  const button2 = document.querySelector(".step-two");
  const button3 = document.querySelector(".step-three");
  const button4 = document.querySelector(".step-four");
  const step1 = document.querySelector(".no-1");
  const step2 = document.querySelector(".no-2");
  const step3 = document.querySelector(".no-3");
  const step4 = document.querySelector(".no-4");
  const next = document.querySelector(".cta-next");
  let currentStep = document.querySelector(`.no-${currentAppend}`);

  currentStep.style.backgroundColor = "hsl(206, 94%, 87%)";
  currentStep.style.color = "hsl(0, 0%, 0%)";
  currentStep.style.cursor = "pointer";

  function clearForms() {
    main.innerHTML = "";
  }
  function resetStepStyles() {
    const allSteps = [step1, step2, step3, step4];
    allSteps.forEach((step) => {
      step.style.backgroundColor = "transparent";
      step.style.color = "hsl(0, 0%, 100%)";
      step.style.cursor = "pointer";
    });
  }

  function handleClickOne() {
    console.log("step one is clicked");

    clearForms();
    resetStepStyles();
    main.appendChild(form1);

    step1.style.backgroundColor = "hsl(206, 94%, 87%)";
    step1.style.color = "hsl(0, 0%, 0%)";
    step1.style.cursor = "pointer";
  }

  function handleClickTwo() {
    console.log("step two is clicked");

    clearForms();
    resetStepStyles();
    main.appendChild(form2);

    step2.style.backgroundColor = "hsl(206, 94%, 87%)";
    step2.style.color = "hsl(0, 0%, 0%)";
  }

  function handleClickThree() {
    console.log("step three is clicked");
    const step3 = document.querySelector(".no-3");

    clearForms();
    resetStepStyles();
    main.appendChild(form3);

    step3.style.backgroundColor = "hsl(206, 94%, 87%)";
    step3.style.color = "hsl(0, 0%, 0%)";
  }

  function handleClickFour() {
    console.log("step four is clicked");
    const step4 = document.querySelector(".no-4");

    clearForms();
    resetStepStyles();
    main.appendChild(form4);

    step4.style.backgroundColor = "hsl(206, 94%, 87%)";
    step4.style.color = "hsl(0, 0%, 0%)";
  }
  function handleNext() {
    clearForms();
    resetStepStyles();

    currentAppend++;
    currentStep = document.querySelector(`.no-${currentAppend}`);
    if (currentStep) {
      currentStep.style.backgroundColor = "hsl(206, 94%, 87%)";
      currentStep.style.color = "hsl(0, 0%, 0%)";
      currentStep.style.cursor = "pointer";
    } else {
      console.log("No more steps available");
      currentAppend--;
      return;
    }
    const nextForm = document.querySelector(`.step-${currentAppend}`);
    console.log(nextForm);

    if (nextForm) {
      main.appendChild(nextForm);
    }
  }

  button1.addEventListener("click", handleClickOne);
  button2.addEventListener("click", handleClickTwo);
  button3.addEventListener("click", handleClickThree);
  button4.addEventListener("click", handleClickFour);
  next.addEventListener("click", handleNext);

  clearForms();
  main.appendChild(form1);
});
