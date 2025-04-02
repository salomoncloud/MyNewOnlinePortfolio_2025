document.addEventListener('DOMContentLoaded', function() {
    const cmdLine = document.getElementById('cmdline');
    const output = document.getElementById('output');
  
    // Command definitions
    const commands = {
      help: function() {
        return `Available commands:
  ls -a        : list all directories
  cd           : change directory to view sections (usage: cd <directory>)
  whoami       : brief description of Salomon
  joke         : tells you a joke
  qualifications: lists my certifications and diplomas
  experience   : lists my past jobs 
  techskills   : lists my technical strengths
  softskills   : lists my soft skills
  contact      : gives you my email`;
      },
      'ls -a': function() {
        return `Directories:
  qualifications, experience, techskills, softskills, contact`;
      },
      whoami: function() {
        return `I am Salomon – a passionate developer with experience in building interactive web experiences. (Update with your own bio)`;
      },
      joke: function() {
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs!",
          "A SQL query walks into a bar, approaches two tables, and asks: 'Can I join you?'",
          "There are 10 types of people in the world: those who understand binary and those who don't."
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      },
      qualifications: function() {
        return `Certifications and Diplomas:
  - Certification A
  - Certification B
  - Diploma in XYZ (Update with your details)`;
      },
      experience: function() {
        return `Past Jobs:
  - Job A at Company X
  - Job B at Company Y (Update with your actual experience)`;
      },
      techskills: function() {
        return `Technical Skills:
  - HTML, CSS, JavaScript, and more (Update with your skills)`;
      },
      softskills: function() {
        return `Soft Skills:
  - Communication, teamwork, problem-solving (Update with your skills)`;
      },
      contact: function() {
        return `Contact:
  Email: salomon@example.com (Update with your email)`;
      },
      cd: function(args) {
        if (args && args.length > 0) {
          const section = args.join(' ').toLowerCase();
          // If the command name exists, call that command
          if (commands[section]) {
            return commands[section]();
          } else {
            return `No such directory: ${section}`;
          }
        } else {
          return "Usage: cd <directory>";
        }
      }
    };
  
    // Listen for user input
    cmdLine.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const input = cmdLine.value.trim();
        if (input === '') return;
        
        // Echo the input
        output.innerHTML += `<p>$ ${input}</p>`;
        
        let args = input.split(' ');
        let command = args.shift().toLowerCase();
        let response = '';
  
        // Check for cd separately, since it may have arguments
        if (command === 'cd') {
          response = commands.cd(args);
        } else if (commands[command]) {
          response = commands[command]();
        } else {
          response = `Command not found: ${command}`;
        }
        
        output.innerHTML += `<p>${response}</p>`;
        cmdLine.value = '';
        // Scroll to the bottom of the page to show new output
        window.scrollTo(0, document.body.scrollHeight);
      }
    });
  });
  