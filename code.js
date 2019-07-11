

var app= new Vue ({
    el: "#app1",

    data: {
      menu:false,
      modal: false,
      page: "preview",
      color: "",

        educationlist:[],
        workexplist:[],
        accomplishmentlist: [],
        extracurricularlist:[],
        languageslist:[],
        programslist:[],
        softskillslist:[],
        awardslist:[],

        workexpEdit: {
            work_company: "",
            work_title: "",
            work_startdate: new Date().toISOString().substr(0, 10),
            work_enddate: new Date().toISOString().substr(0, 10),
            work_description: "",
            start_menu: false,
            end_menu: false,

        },

        educationEdit: {
          college: "",
          degree: "",
          gradyear: new Date().toISOString().substr(0, 10),
          menu: false
        },
        
        accomplishmentEdit: {
          title: "",
          description: "",
        },
        extracurricularEdit: {
          title: "",
          description: "",
          date: "",
        },
        languagesEdit: {
          title: "",
          proficiency:  "",
        },
        programsEdit: {
          title: "",
          proficiency:  "",
        },
        softskillsEdit: {
          title: "",
        },
        awardsEdit: {
          title: "",
          receivedfrom:  "",
          date: new Date().toISOString().substr(0, 10),
          description: "",
          menu:false
        },
        proficiencylist: [
          "Beginner",
          "Intermediate",
          "Proficient",
          "Advanced",
          "Expert"
        ],
        colors: [
            "orange",
            "black",
            "red",
            "blue",
            "green"
        ],
        picked_color: "black",
        color_brightness: 6,
        accent: 0,
        info: 
            {
                first_name:"Your ",
                last_name:"Name",
                address: "address",
                city:"City",
                state:"State",
                zip:"Zip Code", 
                country: "Country",
                email: "email",
                phone: "222-222-2222",
                job_title: "Profession",
                about_me: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum delectus laborum harum dolorem nesciunt ipsa voluptatem accusamus, ab facere, ullam labore maiores quia voluptates placeat, itaque quas consectetur illum.",
            },
            template: "malia",
      templateLabel: "Choose a Template",
      templates: [
        {
          model: "malia",
          name: "Template 1"
        },
        {
          model: "hannah",
          name: "Template 2"
        },
        {
          model: "taft",
          name: "Template 3"
        },
        {
          model: "sharon",
          name: "Template 4"
        },
      ],
      
        
    },
    created: function () {
      new KellyColorPicker({
        place : 'color-picker',
        size : 150,
        input : 'color',
        method: 'triangle',
        input_format: "rgba",
        alpha_slider: true,
  
      });
    },

    methods: {
      addWork: function(){
        this.workexplist.push(this.workexpEdit)
        this.workexpEdit={
          work1company: "",
          work1title: "",
          work1startdate: "",
          work1enddate: "",
          work1description: "",
          
        }
      },
        addEducation: function(){
          this.educationlist.push(this.educationEdit)

          this.educationEdit= {
            college: "",
            degree: "",
            gradyear: "",
            menu: false
          }
        
      },

      addAccomplishment: function(){
        this.accomplishmentlist.push(this.accomplishmentEdit)

        this.accomplishmentEdit= {
          title: "",
          description: "",
        }

      },

      addLanguage: function(){
        this.languageslist.push(this.languagesEdit)

        this.languagesEdit= {
          title: "",
          proficiency:  "",
        }


      },

      addSkill: function(){
        this.programslist.push(this.programsEdit)

        this.programsEdit= {
          title: "",
          proficiency:  "",
        }


      },

      addAward: function(){
        this.awardslist.push(this.awardsEdit)

        this.awardsEdit= {
          title: "",
          receivedfrom:  "",
          date: "",
          description: "",
        }
      },
      addExtracurricular: function(){
        this.extracurricularlist.push(this.extracurricularEdit)
  
        this.extracurricularEdit= {
          title: "",
          proficiency:  "",
        }
      },
      newKellyColorPicker: function () {
        if (this.pickingColor == false) {
          new KellyColorPicker({
            place : 'color-picker',
            size : 150,
            input : 'color',
            method: 'triangle',
            input_format: "rgba",
            alpha_slider: true,
          });
          this.pickingColor = true;
        } else if (this.pickingColor == false) {
        }
  
      },

    },

    computed: {
        computedColorClass: function () {
          return {
            "lighten-5": this.color_brightness == 1,
            "lighten-4": this.color_brightness == 2,
            "lighten-3": this.color_brightness == 3,
            "lighten-2": this.color_brightness == 4,
            "lighten-1": this.color_brightness == 5,
            "darken-1": this.color_brightness == 7,
            "darken-2": this.color_brightness == 8,
            "darken-3": this.color_brightness == 9,
            "darken-4": this.color_brightness == 10,
            "accent-1": this.accent == 11,
            "accent-2": this.accent == 12,
            "accent-3": this.accent == 13,
            "accent-4": this.accent == 14,
          }
        },
      },
})