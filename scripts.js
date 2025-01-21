//By x2Loreeh
var data = [
    {
      AboutDevTypeText: "Welcome to my Portfolio! \n "
    }
  ];

var allElements = document.getElementsByClassName("typeing");
for (var j = 0; j < allElements.length; j++) {
  var currentElementId = allElements[j].id;
  var currentElementIdContent = data[0][currentElementId];
  var element = document.getElementById(currentElementId);
  var devTypeText = currentElementIdContent;
  var i = 0, isTag, text;
  (function type() {
    text = devTypeText.slice(0, ++i);
    if (text === devTypeText) return;
    element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;
    if (isTag) return type();
    setTimeout(type, 60);
  })();
}

const skills = {
  linux: {
      title: "Linux",
      description: "I have several years of experience using Linux, which has been my primary environment for learning and development. During this time, I’ve built a strong foundation in navigating the Linux command line, managing file systems, and understanding processes and permissions. I’ve used Linux to automate tasks with Bash scripting, troubleshoot issues, and experiment with various distributions to deepen my knowledge of the operating system. While I am still exploring more advanced aspects like kernel customization, I am confident in my ability to work effectively in a Linux-based environment."
  },
  "reverse-engineering": {
      title: "Reverse Engineering",
      description: "Reverse engineering has been an exciting area of exploration for me, where I’ve used tools like Ghidra and GDB to analyze and understand how software works under the hood. I’ve delved into x64/x86 assembly, primarily to gain a better grasp of low-level programming and debugging techniques. While I’m still building my expertise, this experience has given me a solid introduction to system-level programming and helped me understand the importance of software security and optimization at a deeper level."
  },
  java: {
      title: "Java",
      description: "Java was the first programming language I learned, and it has remained a cornerstone of my technical foundation. I initially started with Java to create custom Minecraft plugins, which allowed me to understand real-world applications of coding. Over time, I’ve expanded my knowledge to include concepts like object-oriented programming, data structures, and multithreading. While I’m still growing as a developer, Java has given me the tools to approach problem-solving in a structured and efficient way, and I continue to refine my skills through new projects and challenges."
  },
  spigot: {
      title: "Spigot",
      description: "Working with Spigot has been a unique way for me to combine creativity and technical problem-solving. Using the Spigot API, I’ve developed custom plugins that enhance gameplay and add unique features to Minecraft servers. This has taught me how to work with event-driven systems, manage resources efficiently, and debug issues that arise in a dynamic environment. Although there is always more to learn, my experience with Spigot has been invaluable for developing practical coding skills and understanding user-focused development."
  }
};

function showSkillDetails(skillKey) {
  const skill = skills[skillKey];
  if (skill) {
      document.getElementById("popup-title").innerText = skill.title;
      document.getElementById("popup-description").innerText = skill.description;
      document.getElementById("popup-overlay").style.display = "block";
      document.getElementById("skill-popup").style.display = "block"; 
  }
}

function closePopup() {
  document.getElementById("popup-overlay").style.display = "none";
  document.getElementById("skill-popup").style.display = "none"; 
}
