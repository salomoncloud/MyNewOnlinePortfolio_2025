$(function() {
    // Define your commands as functions.
    const commands = {
      help: function() {
        return `Available commands:
    ls           : list all directories
    cd <dir>     : change directory to view sections
    whoami       : brief description of Salomon
    joke         : tells you a joke
    qualified    : lists my certifications and diplomas
    experience   : lists my past jobs 
    techskills   : lists my technical strengths
    softskills   : lists my soft skills
    contact      : gives you my email`;
      },
      ls: function() {
        return `Directories:
    qualified, experience, techskills, softskills, contact`;
      },
      whoami: function() {
        return `Hi There! I'm Salomon – a passionate technologist with experience in building interactive web experiences via the cloud, and a seasoned IT professional with Data Center and Networking specialization.`;
      },
      joke: function() {
        const jokes = [
          "A TCP packet walks into a bar and asks for a beer, the bartender replies: 'you want a beer?', TCP replies, 'yes, a beer.'",
          "What's Tom Hanks' password? 1forrest1!",
          "A SQL query walks into a bar, approaches two tables, and asks: 'Can I join you?'",
          "There are 10 types of people in the world: those who understand binary and those who don't.",
          "Failure is not an option -- it comes bundled with Windows.",
          "Alibaba Cloud. That's it. That's the joke.",
          "Microsoft gives you Windows... Linux gives you the whole house."
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      },
      qualified: function() {
        return `Certifications and Diplomas:
    - AWS Solutions Architect Associate
    - AWS Cloud Practitioner
    - Azure Administrator 104
    - Azure Fundamentals 900
    - DEP Telecommunications Installation and Repair from Pearson Electrotechnology Centre
    - AEC Cloud Computing and Networking Support from MCIT
    - DES High School Diploma from Rosemount High School`;
      },
      experience: function() {
        return `Past Jobs:
    - Cloud Administrator at CGI, focused on cloud solutions built on AWS and Azure
    - Network Technician at Rogers, helped support, optimize and deliver Canada's most reliable, high performance wireless network
    - Data Center Technician at Cologix, provided remote hands support for enterprises as well as regular maintenance of IT equipment and facility operations`;
      },
      techskills: function() {
        return `Technical Skills:
    - Cloud computing expertise on Azure and AWS, as well as some experience on GCP - specialized in Compute and FinOps.
    - Over 5 years of experience in Networking (WAN at Rogers, LAN at Cologix) including Fiber optics, Cisco equipment, and more.
    - Hardware experience working on computers, servers, cabling, CCTV and more.
    - Web development basics including HTML, CSS, JavaScript.`;
      },
      softskills: function() {
        return `Soft Skills:
    - Communication, teamwork, problem-solving, accountability, curiosity, and leadership.`;
      },
      contact: function() {
        return `Contact:
    Email: salomon.cloud.dev@gmail.com
    Linkedin: <a href="https://www.linkedin.com/in/salomon-fritz-lubin-504a1a1ab/" target="_blank">My LinkedIn Profile</a>`;
      },
      cd: function(args, term) {
        if (args.length > 0) {
          const section = args.join(' ').toLowerCase();
          if (commands[section]) {
            term.echo(commands[section]());
          } else {
            term.echo(`No such directory: ${section}`);
          }
        } else {
          term.echo("Usage: cd <directory>");
        }
      }
    };
  
    // Initialize jQuery Terminal on the container.
    $('#terminal').terminal(function(command, term) {
      if (command !== '') {
        let args = command.split(' ');
        let cmd = args.shift().toLowerCase();
  
        if (cmd === 'cd') {
          commands.cd(args, term);
        } else if (commands[cmd]) {
          term.echo(commands[cmd]());
        } else {
          term.echo(`Command not found: ${cmd}`);
        }
      }
    }, {
      greetings: "Welcome to my terminal! To list available commands type help",
      prompt: '$ ',
      name: 'salomon_terminal'
    });
  });
  