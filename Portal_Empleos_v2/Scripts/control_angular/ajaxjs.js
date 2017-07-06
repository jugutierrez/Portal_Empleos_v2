
var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.datos_per = {};
    $scope.desc_curriculum = {};
    $scope.prof_curriculum = {};
    $scope.exp_curriculum = {};
    $scope.est_curriculum = {};
    $scope.soft_curriculum = {};
    $scope.hab_curriculum = {};
    $scope.tipo_identificacion = {};
    $scope.doc_curriculum = {};
    $scope.rellenar_h = {};
    $scope.rellenar_id = {};
    $scope.rellenar_n_id = {};
    $scope.rellenar_pro = {};
    $scope.rellenar_sof = {};
    $scope.rellenar_g_sof = {};
    $scope.rellenar_insti = {};
    $scope.rellenar_capa = {};
    $scope.rellenar_e_capa = {};
    $scope.rellenar_cargo_exp = {};
    $scope.rellenar_area_exp = {};
    $scope.rellenar_reg = {};
    $scope.rellenar_ge = {};
    $scope.rellenar_dis = {};
    $scope.rellenar_city = {};
    $scope.respuestas = {};


    $scope.datos_persona = function () {

        $scope.ver_datos = true;
        $scope.error_datos = false;
        $http.get('/Curriculum_mant/datos_persona_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('success');
                    $scope.datos_per = successResponse.data.datos_p;
                    console.log(successResponse.data.datos_p);
                    $scope.ver_datos = false;
                }
                else {
                    $scope.datos_per = null;
                    $scope.ver_datos = false;
                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.error_datos = true;
                $scope.ver_datos = false;
                console.log("error my friend");
            });
    };
    $scope.foto_persona = function () {

        $scope.ver_foto = true;
        $scope.error_foto = false;
        $http.get('/Curriculum_mant/llamar_foto_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('success');
                    $scope.foto_per = successResponse.data.foto_v;

                    console.log(successResponse.data.foto_v);
                    $scope.ver_foto = false;
                }
                else {
                    $scope.foto_per = null;
                    $scope.ver_foto = false;
                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.error_foto = true;
                $scope.ver_foto = false;
                console.log("error my friend");
            });
    };
    $scope.identificacion_persona = function () {


        $http.get('/Curriculum_mant/listar_tipo_identificacion_persona').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.tipo_identificacion = successResponse.data.tipo_i;
                    console.log(successResponse.data.tipo_i);

                }
                else {
                    $scope.tipo_identificacion = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };

    $scope.rellenar_habilidad = function () {


        $http.get('/Curriculum_mant/rellenar_habilidad').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_h = successResponse.data.rellenar_ha;
                    console.log(successResponse.data.rellenar_h);

                }
                else {
                    $scope.rellenar_h = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_grado_habilidad = function () {


        $http.get('/Curriculum_mant/rellenar_grado_habilidad').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_grado_h = successResponse.data.rellenar_grado_ha;
                    console.log(successResponse.data.rellenar_grado_h);

                }
                else {
                    $scope.rellenar_grado_h = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };

    $scope.rellenar_idioma = function () {


        $http.get('/Curriculum_mant/rellenar_idiomas').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_id = successResponse.data.rellenar_idioma;
                    console.log(successResponse.data.rellenar_id);

                }
                else {
                    $scope.rellenar_id = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_nivel_idiomas = function () {


        $http.get('/Curriculum_mant/rellenar_nivel_idiomas').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_n_id = successResponse.data.rellenar_n_idioma;
                    console.log(successResponse.data.rellenar_n_id);

                }
                else {
                    $scope.rellenar_n_id = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_profesiones = function () {


        $http.get('/Curriculum_mant/rellenar_profesiones').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_pro = successResponse.data.rellenar_p;
                    console.log(successResponse.data.rellenar_pro);

                }
                else {
                    $scope.rellenar_pro = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_softwares = function () {


        $http.get('/Curriculum_mant/rellenar_software').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_soft = successResponse.data.rellenar_s;
                    console.log(successResponse.data.rellenar_soft);

                }
                else {
                    $scope.rellenar_soft = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_grado_softwares = function () {


        $http.get('/Curriculum_mant/rellenar_grado_software').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_g_soft = successResponse.data.rellenar_g_s;
                    console.log(successResponse.data.rellenar_g_soft);

                }
                else {
                    $scope.rellenar_g_sof = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_instituciones = function () {


        $http.get('/Curriculum_mant/rellenar_institucion').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_insti = successResponse.data.rellenar_ints;
                    console.log(successResponse.data.rellenar_insti);

                }
                else {
                    $scope.rellenar_insti = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_capacitacion = function () {


        $http.get('/Curriculum_mant/rellenar_capacitacion').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_capa = successResponse.data.rellenar_cap;
                    console.log(successResponse.data.rellenar_capa);

                }
                else {
                    $scope.rellenar_capa = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_estado_capacitacion = function () {


        $http.get('/Curriculum_mant/rellenar_estado_capacitacion').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_e_capa = successResponse.data.rellenar_e_cap;
                    console.log(successResponse.data.rellenar_e_capa);

                }
                else {
                    $scope.rellenar_e_capa = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_estudios = function () {


        $http.get('/Curriculum_mant/rellenar_estudios').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_es = successResponse.data.rellenar_est;
                    console.log(successResponse.data.rellenar_es);

                }
                else {
                    $scope.rellenar_es = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_tipo_estudios = function () {


        $http.get('/Curriculum_mant/rellenar_tipo_estudios').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_t_es = successResponse.data.rellenar_t_est;
                    console.log(successResponse.data.rellenar_t_es);

                }
                else {
                    $scope.rellenar_t_es = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_estado_estudios = function () {


        $http.get('/Curriculum_mant/rellenar_estado_estudios').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_e_es = successResponse.data.rellenar_e_est;
                    console.log(successResponse.data.rellenar_e_capa);

                }
                else {
                    $scope.rellenar_e_capa = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_cargo_experiencias = function () {


        $http.get('/Curriculum_mant/rellenar_cargo_exp').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_cargo_exp = successResponse.data.rellenar_c_exp;
                    console.log(successResponse.data.rellenar_cargo_exp);

                }
                else {
                    $scope.rellenar_cargo_exp = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });

    };
    $scope.rellenar_area_experiencias = function () {


        $http.get('/Curriculum_mant/rellenar_area_exp').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_area_exp = successResponse.data.rellenar_a_exp;
                    console.log(successResponse.data.rellenar_area_exp);

                }
                else {
                    $scope.rellenar_area_exp = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_genero = function () {


        $http.get('/Curriculum_mant/rellenar_genero').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_ge = successResponse.data.rellenar_g;
                    console.log(successResponse.data.rellenar_ge);

                }
                else {
                    $scope.rellenar_ge = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_discapacidad = function () {


        $http.get('/Curriculum_mant/rellenar_discapacidad').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_dis = successResponse.data.rellenar_d;
                    console.log(successResponse.data.rellenar_dis);

                }
                else {
                    $scope.rellenar_dis = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_region = function () {


        $http.get('/Curriculum_mant/rellenar_region').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_reg = successResponse.data.rellenar_r;
                    console.log(successResponse.data.rellenar_reg);

                }
                else {
                    $scope.rellenar_reg = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_ciudad = function (id) {

        console.log(id);
     
        $http.get('/Curriculum_mant/rellenar_ciudad').then(id,
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.rellenar_city = successResponse.data.rellenar_c;
                    console.log(successResponse.data.rellenar_city);

                }
                else {
                    $scope.rellenar_city = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };


    $scope.descripcion_curriculum = function () {

        $scope.ver_desc = true;
        $scope.error_desc = false;
        $http.get('/Curriculum_mant/vista_descripcion_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("lol2");
                    $scope.ver_desc = false;
                    $scope.desc_curriculum = successResponse.data.desc_c;


                } else {
                    $scope.desc_curriculum = "";
                    $scope.ver_desc = false;
                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.ver_desc = false;
                $scope.error_desc = true;


                console.log("error my friend");
            });
    };

    $scope.experiencias_laborales_curriculum = function () {

        $scope.ver_exp = true;
        $scope.error_exp = false;
        $http.get('/Curriculum_mant/vista_experiencias_laborales_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("exp load");
                    $scope.ver_exp = false;
                    $scope.exp_curriculum = successResponse.data.exp_c;
                    console.log(successResponse.data.exp_c);

                } else {
                    $scope.exp_curriculum = "";
                    $scope.ver_exp = false;
                    console.log("exp false");
                }
            },
            function (errorResponse) {
                $scope.ver_exp = false;
                $scope.error_exp = true;


                console.log("exp error");
            });
    };

    $scope.profesion_curriculum = function () {

        $scope.ver_prof = true;
        $scope.error_prof = false;
        $http.get('/Curriculum_mant/vista_profesion_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("lol2");
                    $scope.ver_prof = false;
                    $scope.prof_curriculum = successResponse.data.profesion_c;

                } else {
                    $scope.ver_prof = false;
                    $scope.prof_curriculum = "";

                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.ver_prof = false;
                $scope.error_prof = true;
                console.log("error my friend2");
            });
    };

    $scope.estudios_curriculum = function () {

        $scope.ver_est = true;
        $scope.error_est = false;
        $http.get('/Curriculum_mant/vista_estudios_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("lol2");
                    $scope.ver_est = false;
                    $scope.est_curriculum = successResponse.data.estudios_c;

                } else {
                    $scope.ver_est = false;
                    $scope.est_curriculum = "";

                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.ver_est = false;
                $scope.error_est = true;
                console.log("error my friend2");
            });
    };
    $scope.capacitaciones_curriculum = function () {

        $scope.ver_cap = true;
        $scope.error_cap = false;
        $http.get('/Curriculum_mant/vista_capacitaciones_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("lol2");
                    $scope.ver_cap = false;
                    $scope.cap_curriculum = successResponse.data.capacitaciones_c;

                } else {
                    $scope.ver_cap = false;
                    $scope.cap_curriculum = "";

                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.ver_cap = false;
                $scope.error_cap = true;
                console.log("error my friend2");
            });
    };
    $scope.softwares_curriculum = function () {

        $scope.ver_soft = true;
        $scope.error_soft = false;
        $http.get('/Curriculum_mant/vista_softwares_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("lol2");
                    $scope.ver_soft = false;
                    $scope.soft_curriculum = successResponse.data.softwares_c;

                } else {
                    $scope.ver_soft = false;
                    $scope.soft_curriculum = "";

                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.ver_soft = false;
                $scope.error_soft = true;
                console.log("error my friend2");
            });
    };
    $scope.habilidades_curriculum = function () {

        $scope.ver_hab = true;
        $scope.error_hab = false;
        $http.get('/Curriculum_mant/vista_habilidades_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("lol2");
                    $scope.ver_hab = false;
                    $scope.hab_curriculum = successResponse.data.habilidades_c;

                } else {
                    $scope.ver_hab = false;
                    $scope.hab_curriculum = "";

                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.ver_hab = false;
                $scope.error_hab = true;
                console.log("error my friend2");
            });
    };
    $scope.idiomas_curriculum = function () {

        $scope.ver_idioma = true;
        $scope.error_idioma = false;
        $http.get('/Curriculum_mant/vista_idiomas_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("lol2");
                    $scope.ver_idioma = false;
                    $scope.idioma_curriculum = successResponse.data.idiomas_c;

                } else {
                    $scope.ver_idioma = false;
                    $scope.idioma_curriculum = "";

                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.ver_idioma = false;
                $scope.error_idioma = true;
                console.log("error my friend2");
            });
    };
    $scope.documentos_curriculum = function () {

        $scope.ver_doc = true;
        $scope.error_doc = false;
        $http.get('/Curriculum_mant/vista_documento_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("lol2");
                    $scope.ver_doc = false;
                    $scope.doc_curriculum = successResponse.data.doc_c;

                } else {
                    $scope.ver_doc = false;
                    $scope.doc_curriculum = "";

                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.ver_doc = false;
                $scope.error_doc = true;
                console.log("error my friend2");
            });
    };

    $scope.get = function (Employee) {
     
        var singlerecord = crudservice.get(Employee.EmpNo);
        singlerecord.then(function (d) {
          
            var record = d.data;
            $scope.UpdateEmpNo = record.EmpNo;
            $scope.UpdateEmpName = record.EmpName;
            $scope.UpdateSalary = record.Salary;
            $scope.UpdateDeptName = record.DeptName;
            $scope.UpdateDesignation = record.Designation;
        },
        function () {
            swal("Oops...", "Error occured while getting record", "error");
        });
    }





}]);



app.controller('data1', ['$scope', '$filter', '$http', '$uibModal', function ($scope, $filter, $http, $uibModal) {

    $scope.respuesta_cuestionario_multiple = [];
    $scope.update_p = {};
    $scope.datos_oferta = {};
    $scope.newEmployee1 = [];
    $scope.newEmployee2 = [];
    $scope.agrega_idioma = {};
    $scope.elimina_idioma = {};
    $scope.chequeo = false;

    $scope.cambiacheck = function () {

        if ($scope.chequeo == false)
        {
            $scope.chequeo = true;
            console.log("si");
        }
        else
        {
            $scope.chequeo = false;
            console.log("no");
        }
    };

    $scope.abremodal = function (url, id) {
        console.log(url);

        $scope.$modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: url + id,

            size: 'lg'

        });

        $scope.$modalInstance.result.then(function () {
            console.log("close");

        }, function () {

            console.log("dissmiss");
        });
    };
    $scope.addEmployee = function () {
        console.log($scope.respuesta_cuestionario_multiple);
        console.log($scope.datos_oferta);
        var respuestas_cuestionario = { 'respuesta_cuestionario_multiple': $scope.respuesta_cuestionario_multiple, 'datos_oferta': $scope.datos_oferta };
        $http.post('/Ofertas_Control/create_postulacion', respuestas_cuestionario).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.newEmployee2 = successResponse.data.employee;
                        //$scope.$modalInstance.close();
                        //$scope.abremodal("../../Home/vista_parcial", "");
                        window.location.reload();
                    },
                    function (errorResponse) {
                        // handle errors here
                    });
    };
    $scope.cerrarmodal = function () {
        $scope.$modalInstance.close();
    };

    $scope.actualizar_datos_persona = function () {

        var Employee = {

            nombre_persona: $scope.update_nombre_persona,
            apellido_paterno_persona: $scope.update_apellido_paterno_persona,
            apellido_materno_persona: $scope.update_apellido_materno_persona,
            id_tipo_identificacion_persona: $scope.update_id_tipo_identificacion_persona,
            fecha_nacimiento_persona: $scope.update_fecha_nacimiento_persona,
            identificacion_persona: $scope.update_identificacion_persona,
            direccion_curriculum: $scope.update_direccion_curriculum,
            id_tipo_persona: $scope.update_id_tipo_persona,
            sueldo_esperado: $scope.update_sueldo_esperado,
            id_discapacidad_persona: $scope.update_id_discapacidad_persona,
            correo_electronico_persona: $scope.update_correo_electronico_persona,
            telefono_curriculum_1: $scope.update_telefono_curriculum_1,
            telefono_curriculum_2: $scope.update_telefono_curriculum_2,
            id_comuna: $scope.update_id_comuna

        };



        console.log(Employee);

        /* console.log($scope.datos_per);
         var update = { 'datos_per': $scope.update_p};
         $http.post('/Curriculum_mant/actualiza_datos_persona_curriculum', update).then(
                      function (successResponse) {
                          if (successResponse.data.success == true) {
                              console.log("lol2");
                             console.log(successResponse.data.resp);

                          } else {
                              console.log(successResponse.data.resp);
                          }
                      },
     function (errorResponse) {
        
         console.log("plop");
     });*/
    };
    $scope.agregar_idioma = function () {
        console.log($scope.agrega_idioma);

        var add_idioma = { 'nuevo_idioma': $scope.agrega_idioma };

        $http.post('/Curriculum_mant/agregar_idiomas_curriculum', add_idioma).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.$modalInstance.close();
                        $scope.respuesta = successResponse.data.respuesta;
                        $scope.cerrarmodal();
                        //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                        $scope.idiomas_curriculum();
                    },
                    function (errorResponse) {
                        // handle errors here
                        console.log(':C');
                    });
    };
    $scope.eliminar_idioma = function () {
        console.log($scope.elimina_idioma);

        //var del_idioma = { 'id': $scope.elimina_idioma.id };
        var id_idioma = $scope.elimina_idioma.id;
        $http.post('/Curriculum_mant/eliminar_idiomas_curriculum/' + id_idioma).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.idiomas_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.agregar_habilidad = function () {
        console.log($scope.agrega_habilidad);

        var add_habilidad = { 'nueva_habilidad': $scope.agrega_habilidad };

        $http.post('/Curriculum_mant/agregar_habilidades_curriculum', add_habilidad).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.$modalInstance.close();
                        $scope.respuesta = successResponse.data.respuesta;
                        $scope.cerrarmodal();
                        //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                        $scope.habilidades_curriculum();
                    },
                    function (errorResponse) {
                        // handle errors here
                        console.log(':C');
                    });
    };
    $scope.eliminar_habilidad = function () {
        console.log($scope.elimina_habilidad);

        //var del_idioma = { 'id': $scope.elimina_idioma.id };
        //[{ id: 1, name: "Ben", age: 28 }];
        var id_habilidad = $scope.elimina_habilidad.id;
        $http.post('/Curriculum_mant/eliminar_habilidades_curriculum/' + id_habilidad).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.habilidades_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.agregar_software = function () {
        console.log($scope.agrega_software);

        var add_software = { 'nuevo_software': $scope.agrega_software };

        $http.post('/Curriculum_mant/agregar_softwares_curriculum', add_software).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.$modalInstance.close();
                        $scope.respuesta = successResponse.data.respuesta;
                        $scope.cerrarmodal();
                        //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                        $scope.softwares_curriculum();
                    },
                    function (errorResponse) {
                        // handle errors here
                        console.log(':C');
                    });
    };
    $scope.eliminar_software = function () {
        console.log($scope.elimina_software);

        //var del_idioma = { 'id': $scope.elimina_idioma.id };
        //[{ id: 1, name: "Ben", age: 28 }];
        var id_software = $scope.elimina_software.id;
        $http.post('/Curriculum_mant/eliminar_softwares_curriculum/' + id_software).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.softwares_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.agregar_profesion = function () {
        console.log($scope.agrega_profesion);

        var add_profesion = { 'nueva_profesion': $scope.agrega_profesion };

        $http.post('/Curriculum_mant/agregar_profesiones_curriculum', add_profesion).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.$modalInstance.close();
                        $scope.respuesta = successResponse.data.respuesta;
                        $scope.cerrarmodal();
                        //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                        $scope.profesion_curriculum();
                    },
                    function (errorResponse) {
                        // handle errors here
                        console.log(':C');
                    });
    };
    $scope.eliminar_profesion = function () {
        console.log($scope.elimina_profesion);

        //var del_idioma = { 'id': $scope.elimina_idioma.id };
        //[{ id: 1, name: "Ben", age: 28 }];
        var id_profesion = $scope.elimina_profesion.id;
        $http.post('/Curriculum_mant/eliminar_profesiones_curriculum/' + id_profesion).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.profesion_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.agregar_experiencia_laboral = function () {
        console.log($scope.agrega_experiencia_laboral);

        var add_experiencia_laboral = { 'nueva_experiencia_laboral': $scope.agrega_experiencia_laboral };

        $http.post('/Curriculum_mant/agregar_experiencias_laborales_curriculum', add_experiencia_laboral).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.$modalInstance.close();
                        $scope.respuesta = successResponse.data.respuesta;
                        $scope.cerrarmodal();
                        //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                        $scope.experiencias_laborales_curriculum();
                    },
                    function (errorResponse) {
                        // handle errors here
                        console.log(':C');
                    });
    };
    $scope.eliminar_experiencia_laboral = function () {
        console.log($scope.elimina_experiencia_laboral);

        //var del_idioma = { 'id': $scope.elimina_idioma.id };
        //[{ id: 1, name: "Ben", age: 28 }];
        var id_experiencia_laboral = $scope.elimina_experiencia_laboral.id;
        $http.post('/Curriculum_mant/eliminar_experiencias_laborales_curriculum/' + id_experiencia_laboral).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.experiencias_laborales_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.agregar_estudio = function () {
        console.log($scope.agrega_estudio);

        var add_estudio = { 'nuevo_estudio': $scope.agrega_estudio };

        $http.post('/Curriculum_mant/agregar_estudios_curriculum', add_estudio).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.$modalInstance.close();
                        $scope.respuesta = successResponse.data.respuesta;
                        $scope.cerrarmodal();
                        //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                        $scope.estudios_curriculum();
                    },
                    function (errorResponse) {
                        // handle errors here
                        console.log(':C');
                    });
    };
    $scope.eliminar_estudio = function () {
        console.log($scope.elimina_estudio);

        //var del_idioma = { 'id': $scope.elimina_idioma.id };
        //[{ id: 1, name: "Ben", age: 28 }];
        var id_estudio = $scope.elimina_estudio.id;
        $http.post('/Curriculum_mant/eliminar_estudios_curriculum/' + id_estudio).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.estudios_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.agregar_documento = function () {
        console.log($scope.agrega_documento);

        var add_documento = { 'nuevo_documento': $scope.agrega_documento };

        $http.post('/Curriculum_mant/agregar_documentos_curriculum', add_documento).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.$modalInstance.close();
                        $scope.respuesta = successResponse.data.respuesta;
                        $scope.cerrarmodal();
                        //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                        $scope.documentos_curriculum();
                    },
                    function (errorResponse) {
                        // handle errors here
                        console.log(':C');
                    });
    };
    $scope.eliminar_documento = function () {
        console.log($scope.elimina_documento);

        //var del_idioma = { 'id': $scope.elimina_idioma.id };
        //[{ id: 1, name: "Ben", age: 28 }];
        var id_documento = $scope.elimina_documento.id;
        $http.post('/Curriculum_mant/eliminar_documentos_curriculum/' + id_documento).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.documentos_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.agregar_capacitacion = function () {
        console.log($scope.agrega_capacitacion);

        var add_capacitacion = { 'nueva_capacitacion': $scope.agrega_capacitacion };

        $http.post('/Curriculum_mant/agregar_capacitaciones_curriculum', add_capacitacion).then(
                    function (successResponse) {
                        console.log('success3');
                        $scope.$modalInstance.close();
                        $scope.respuesta = successResponse.data.respuesta;
                        $scope.cerrarmodal();
                        //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                        $scope.capacitaciones_curriculum();
                    },
                    function (errorResponse) {
                        // handle errors here
                        console.log(':C');
                    });
    };
    $scope.eliminar_capacitacion = function () {
        console.log($scope.elimina_capacitacion);

        //var del_idioma = { 'id': $scope.elimina_idioma.id };
        //[{ id: 1, name: "Ben", age: 28 }];
        var id_capacitacion = $scope.elimina_capacitacion.id;
        $http.post('/Curriculum_mant/eliminar_capacitaciones_curriculum/' + id_capacitacion).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.capacitaciones_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.crear_cuenta_persona = function () {
        console.log($scope.datos_cuenta_persona);

        var add_cuenta = { 'datos_cuenta_personas': $scope.datos_cuenta_persona };

        $http.post('/cuenta/agregar_cuenta_persona', add_cuenta).then(
                     function (successResponse) {

                         if (successResponse.data.success == true) {
                             console.log('success3');
                             //$scope.$modalInstance.close();
                             $scope.respuesta = successResponse.data.respuesta;
                             //$scope.cerrarmodal();
                             //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');
                             var $active = $('.nav-tabs li.active');
                             $active.addClass('disabled');
                             $active.next().removeClass('disabled');
                             nextTab($active);

                         } else {

                             console.log("bla bla bla");
                         }
                     }

                     ,
                     function (errorResponse) {
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');
                         console.log(':C');
                     });


    };
    $scope.recordar_cuenta_persona = function () {
        console.log($scope.recordar_cuenta_personas);

        var add_cuenta = { 'recordar_cuenta_personas': $scope.recordar_cuenta_personas };

        $http.post('/cuenta/recordar_cuenta_persona', add_cuenta).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                         $scope.capacitaciones_curriculum();
                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.actualizar_pass = function () {
        console.log($scope.actualiza_pass);

        var add_pass = { 'actualiza_pass': $scope.actualiza_pass };

        $http.post('/cuenta/actualiza_pass', add_pass).then(
                     function (successResponse) {
                         console.log('success3');
                         $scope.$modalInstance.close();
                         $scope.respuesta = successResponse.data.respuesta;
                         $scope.cerrarmodal();
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');


                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.desactivar_cuenta = function () {


        $http.post('/cuenta/desactiva_cuenta').then(
                     function (successResponse) {
                         console.log('success3');

                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');
                         window.location = "../login";

                     },
                     function (errorResponse) {
                         // handle errors here
                         console.log(':C');
                     });
    };
    $scope.actualiza_descripcion = function () {
        console.log($scope.actualizar_descripcion);

        var add_desc = { 'actualizar_descripcion': $scope.actualizar_descripcion };

        $http.post('/Curriculum_mant/actualiza_descripcion', add_desc).then(
                     function (successResponse) {

                         if (successResponse.data.success == true) {
                             console.log('success3');
                             $scope.$modalInstance.close();
                             $scope.respuesta = successResponse.data.respuesta;
                             $scope.cerrarmodal();
                             //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');

                             $scope.descripcion_curriculum();

                         } else {

                             console.log("bla bla bla");
                         }
                     }

                     ,
                     function (errorResponse) {
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');
                         console.log(':C');
                     });


    };

    $scope.listar_datos_personas = function () {

        $http.get('/Curriculum_mant/datos_persona_curriculum').then(
  function (successResponse) {
      if (successResponse.data.success == true) {
          console.log('success');
          $scope.datos_per = successResponse.data.datos_p;
          var record = successResponse.data.datos_p;

          $scope.update_nombre_persona = record.nombre_persona;
          $scope.update_apellido_paterno_persona = record.apellido_paterno_persona;
          $scope.update_apellido_materno_persona = record.apellido_materno_persona;
          $scope.update_id_tipo_identificacion_persona = record.id_tipo_identificacion_persona;
          $scope.date = record.fecha_nacimiento_persona.replace('/Date(', '').replace(')/', '');
          $scope.update_fecha_nacimiento_persona = $filter('date')($scope.date, 'yyyy-MM-dd');
          $scope.update_identificacion_persona = record.identificacion_persona;
          $scope.update_direccion_curriculum = record.direccion_curriculum;
          $scope.update_id_tipo_persona = record.id_tipo_persona;
          $scope.update_sueldo_esperado = record.sueldo_esperado;
          $scope.update_id_discapacidad_persona = record.id_discapacidad_persona;
          $scope.update_correo_electronico_persona = record.correo_electronico_persona;
          $scope.update_telefono_curriculum_1 = record.telefono_curriculum_1;
          $scope.update_telefono_curriculum_2 = record.telefono_curriculum_2;
          $scope.update_id_comuna = record.id_comuna;
          $scope.update_id_ciudad = record.id_ciudad;
          $scope.update_id_region = record.id_region;
        
      }
      else {

      }
  },
  function (errorResponse) {
      $scope.error_datos = true;
      $scope.ver_datos = false;
      console.log("error my friend");
  });
    };


    $scope.detalle_experiencia_laboral = function (a) {

        $http.get('/Curriculum_mant/detalle_experiencias_laborales_curriculum/' + a).then(
  function (successResponse) {
      if (successResponse.data.success == true) {
          console.log('success');

          var record2 = successResponse.data.exp_c;

          $scope.update_nombre_experiencia_laboral = record2.nombre_experiencia_laboral;
          $scope.update_empresa_experiencia_laboral = record2.empresa_experiencia_laboral;

          $scope.update_id_cargo_experiencia_laboral = record2.id_cargo_experiencia_laboral;

          $scope.fecha_inicio = record2.ano_inicio_experiencia_laboral.replace('/Date(', '').replace(')/', '');
          $scope.update_ano_inicio_experiencia_laboral = $filter('date')($scope.fecha_inicio, 'dd-MM-yyyy');

          $scope.fecha_termino = record2.ano_termino_experiencia_laboral.replace('/Date(', '').replace(')/', '');
          $scope.update_ano_termino_experiencia_laboral = $filter('date')($scope.fecha_termino, 'dd-MM-yyyy');

          $scope.update_id_area_experiencia_laboral = record2.id_area_experiencia_laboral;

          $scope.update_detalle_experiencia_laboral = record2.detalle_experiencia_laboral;


      }
      else {

      }
  },
  function (errorResponse) {
 
      console.log("error my friend");
  });
    };
    $scope.detalle_estudios = function (a) {

        $http.get('/Curriculum_mant/detalle_estudios_curriculum/' + a).then(
  function (successResponse) {
      if (successResponse.data.success == true) {
          console.log('success');

          var record3 = successResponse.data.estudios_c;

          $scope.update_id_estudio = record3.id_estudio;
          $scope.update_id_tipo_estudio = record3.id_tipo_estudio; 
          $scope.update_id_estado_estudio = record3.id_estado_estudio;
          $scope.update_id_institucion = record3.id_institucion;
          $scope.fecha_inicio = record3.ano_inicio_estudio_curriculum.replace('/Date(', '').replace(')/', '');
          $scope.update_ano_inicio_estudio_curriculum = $filter('date')($scope.fecha_inicio, 'dd-MM-yyyy');
          $scope.fecha_termino = record3.ano_termino_estudio_curriculum.replace('/Date(', '').replace(')/', '');
          $scope.update_ano_termino_estudio_curriculum = $filter('date')($scope.fecha_termino, 'dd-MM-yyyy');


      }
      else {

      }
  },
  function (errorResponse) {

      console.log("error my friend");
  });
    };
    $scope.detalle_capacitaciones = function (a) {

        $http.get('/Curriculum_mant/detalle_capacitaciones_curriculum/' + a).then(
  function (successResponse) {
      if (successResponse.data.success == true) {
          console.log('success');

          var record2 = successResponse.data.ca_c;

          
          $scope.update_descripcion_capacitacion = record2.descripcion_capacitacion;

          $scope.update_id_capacitacion = record2.id_capacitacion;

          $scope.fecha_inicio = record2.ano_inicio_capacitacion_curriculum.replace('/Date(', '').replace(')/', '');
          $scope.update_ano_inicio_capacitacion_curriculum = $filter('date')($scope.fecha_inicio, 'dd-MM-yyyy');

          $scope.fecha_termino = record2.ano_termino_capacitacion_curriculum.replace('/Date(', '').replace(')/', '');
          $scope.update_ano_termino_capacitacion_curriculum = $filter('date')($scope.fecha_termino, 'dd-MM-yyyy');

          $scope.update_id_estado_capacitacion = record2.id_estado_capacitacion;
          $scope.update_horas_capacitacion = record2.horas_capacitacion;
          $scope.update_id_tipo_capacitacion = record2.id_tipo_capacitacion; 
          $scope.update_id_institucion = record2.id_institucion;

      }
      else {

      }
  },
  function (errorResponse) {

      console.log("error my friend");
  });
    };

    $scope.editar_experiencia_laboral = function (a) {
        // console.log($scope.edita_experiencia_laboral);
        var edita_experiencia_laboral = {
            nombre_experiencia_laboral: $scope.update_nombre_experiencia_laboral,
            empresa_experiencia_laboral: $scope.update_empresa_experiencia_laboral,
            id_cargo_experiencia_laboral: $scope.update_id_cargo_experiencia_laboral,
            ano_inicio_experiencia_laboral: $scope.update_ano_inicio_experiencia_laboral,
            ano_termino_experiencia_laboral: $scope.update_ano_termino_experiencia_laboral,
            id_area_experiencia_laboral: $scope.update_id_area_experiencia_laboral,
            detalle_experiencia_laboral: $scope.update_detalle_experiencia_laboral
        };



       

        
          var edit_exp = { 'edita_experiencia_laboral': edita_experiencia_laboral };
         
          $http.post('/Curriculum_mant/edita_experiencia_laboral/'+a, edit_exp).then(
                       function (successResponse) {

                           if (successResponse.data.success == true) {
                               console.log('success3');
                               //$scope.$modalInstance.close();
                               $scope.respuesta = successResponse.data.respuesta;
                               //$scope.cerrarmodal();
                               //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');


                           } else {

                               console.log("bla bla bla");
                           }
                       }

                       ,
                       function (errorResponse) {
                           //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');
                           console.log(':C');
                       });


    };
    $scope.editar_estudios = function (a) {
        // console.log($scope.edita_experiencia_laboral);
        var edita_estudios = {
   

            id_estudio: $scope.update_id_estudio,
            id_tipo_estudio:  $scope.update_id_tipo_estudio ,
            id_estado_estudio : $scope.update_id_estado_estudio ,
            id_institucion: $scope.update_id_institucion ,
            ano_inicio_estudio_curriculum: $scope.update_ano_inicio_estudio_curriculum ,
        ano_termino_estudio_curriculum: $scope.update_ano_termino_estudio_curriculum 
        };




    

        var edit_es = { 'edita_estudios': edita_estudios };

        $http.post('/Curriculum_mant/edita_estudios/' + a, edit_es).then(
                     function (successResponse) {

                         if (successResponse.data.success == true) {
                             console.log('success3');
                             //$scope.$modalInstance.close();
                             $scope.respuesta = successResponse.data.respuesta;
                             $scope.cerrarmodal();
                             //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');


                         } else {

                             console.log("bla bla bla");
                         }
                     }

                     ,
                     function (errorResponse) {
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');
                         console.log(':C');
                     });


    };
    $scope.editar_capacitacion = function (a) {
        // console.log($scope.edita_experiencia_laboral);
        var edita_capacitacion = {


          

            descripcion_capacitacion : $scope.update_descripcion_capacitacion ,

        id_capacitacion: $scope.update_id_capacitacion ,


        ano_inicio_capacitacion_curriculum : $scope.update_ano_inicio_capacitacion_curriculum ,

        ano_termino_capacitacion_curriculum :$scope.update_ano_termino_capacitacion_curriculum,

       id_estado_capacitacion: $scope.update_id_estado_capacitacion ,
       horas_capacitacion: $scope.update_horas_capacitacion ,
       id_tipo_capacitacion: $scope.update_id_tipo_capacitacion ,
       id_institucion: $scope.update_id_institucion 
        };




   

        var edit_cap = { 'edita_capacitacion': edita_capacitacion };

        $http.post('/Curriculum_mant/edita_capacitaciones/' + a, edit_cap).then(
                     function (successResponse) {

                         if (successResponse.data.success == true) {
                             console.log('success3');
                             //$scope.$modalInstance.close();
                             $scope.respuesta = successResponse.data.respuesta;
                             $scope.cerrarmodal();
                             //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');


                         } else {

                             console.log("bla bla bla");
                         }
                     }

                     ,
                     function (errorResponse) {
                         //$scope.abremodal("../Curriculum_mant/agregar_vista_habilidades_curriculum/", '');
                         console.log(':C');
                     });


    };
    $scope.actualizar_foto = function (a) {
        console.log($scope.actualiza_fotos);


        var up_foto = new FormData();
        up_foto.append('id_foto', a);
        up_foto.append('file', $scope.actualiza_fotos.fotos);
        //up_foto.append('file', $scope.actualiza_fotos.foto_curriculums);
      
        $http.post('/curriculum_mant/actualiza_foto_curriculum', up_foto
            , {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            }
            ).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('success');
                    $scope.datos_per = successResponse.data.datos_p;
                    $scope.cerrarmodal();
                    $scope.foto_persona();
                }
                else {

                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {

                console.log("error my friend");
            });
    };



}]);


app.controller('control_detalle_ofertas', ['$scope', '$http', function ($scope, $http) {

    $scope.ver_detalle_oferta = {};
    $scope.habilidad_oferta = {};
    $scope.idiomas_oferta = {};
    $scope.profesiones_oferta = {};
    $scope.softwares_oferta = {};
    $scope.cuestionario_oferta = {};

    $scope.vista_datos_detalle_oferta = function (id_oferta) {

        $scope.ver_det_of = true;
        $scope.error_det_of = false;
        $http.get('/Ofertas_Control/vista_datos_detalle_oferta/' + id_oferta).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("izi");
                    $scope.ver_det_of = false;
                    $scope.ver_detalle_oferta = successResponse.data.det_of_c;


                } else {
                    $scope.ver_detalle_oferta = "";
                    $scope.ver_det_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_det_of = false;
                $scope.error_det_of = true;


                console.log("error my friend");
            });
    };
    $scope.vista_habilidades_oferta = function (id_oferta) {

        $scope.ver_hab_of = true;
        $scope.error_hab_of = false;
        $http.get('/Ofertas_Control/vista_habilidades_oferta/' + id_oferta).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("izi2");
                    $scope.ver_hab_of = false;
                    $scope.habilidad_oferta = successResponse.data.habilidad_o;


                } else {
                    $scope.habilidad_oferta = "";
                    $scope.ver_hab_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_hab_of = false;
                $scope.error_hab_of = true;


                console.log("error my friend");
            });
    };

    $scope.vista_idiomas_oferta = function (id_oferta) {

        $scope.ver_idioma_of = true;
        $scope.error_idioma_of = false;
        $http.get('/Ofertas_Control/vista_idiomas_oferta/' + id_oferta).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("izi2");
                    $scope.ver_idioma_of = false;
                    $scope.idiomas_oferta = successResponse.data.idiomas_o;


                } else {
                    $scope.idiomas_oferta = "";
                    $scope.ver_idioma_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_idioma_of = false;
                $scope.error_idioma_of = true;


                console.log("error my friend");
            });
    };

    $scope.vista_documentos_oferta = function (id_oferta) {

        $scope.ver_doc_of = true;
        $scope.error_doc_of = false;
        $http.get('/Ofertas_Control/vista_documentos_oferta/' + id_oferta).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("izi2");
                    $scope.ver_doc_of = false;
                    $scope.doc_oferta = successResponse.data.doc_o;


                } else {
                    $scope.doc_oferta = "";
                    $scope.ver_doc_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_doc_of = false;
                $scope.error_doc_of = true;


                console.log("error my friend");
            });
    };
    $scope.vista_categorias_oferta = function (id_oferta) {

        $scope.ver_cat_of = true;
        $scope.error_cat_of = false;
        $http.get('/Ofertas_Control/vista_categorias_oferta/' + id_oferta).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("izi2");
                    $scope.ver_cat_of = false;
                    $scope.cat_oferta = successResponse.data.cat_o;


                } else {
                    $scope.cat_oferta = "";
                    $scope.ver_cat_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_cat_of = false;
                $scope.error_cat_of = true;


                console.log("error my friend");
            });
    };
    $scope.vista_profesiones_oferta = function (id_oferta) {

        $scope.ver_prof_of = true;
        $scope.error_prof_of = false;
        $http.get('/Ofertas_Control/vista_profesiones_oferta/' + id_oferta).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("izi2");
                    $scope.ver_prof_of = false;
                    $scope.profesiones_oferta = successResponse.data.prof_o;


                } else {
                    $scope.profesiones_oferta = "";
                    $scope.ver_prof_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_prof_of = false;
                $scope.error_prof_of = true;


                console.log("error my friend");
            });
    };
    $scope.vista_softwares_oferta = function (id_oferta) {

        $scope.ver_soft_of = true;
        $scope.error_soft_of = false;
        $http.get('/Ofertas_Control/vista_softwares_oferta/' + id_oferta).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("izi2");
                    $scope.ver_soft_of = false;
                    $scope.softwares_oferta = successResponse.data.soft_o;


                } else {
                    $scope.softwares_oferta = "";
                    $scope.ver_soft_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_soft_of = false;
                $scope.error_soft_of = true;


                console.log("error my friend");
            });
    };




    $scope.vista_cuestionario_oferta = function (id_cuestionario) {

        $scope.ver_cues_of = true;
        $scope.error_cues_of = false;
        $http.get('/Ofertas_Control/vista_cuestionario_oferta/' + id_cuestionario).then(
            function (successResponse) {
                if (successResponse.data.success == true) {

                    $scope.ver_cues_of = false;
                    $scope.cuestionario_oferta = successResponse.data.cuestionario_o;
                    console.log($scope.cuestionario_oferta);

                } else {
                    $scope.cuestionario_oferta = "";
                    $scope.ver_cues_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_cues_of = false;
                $scope.error_cues_of = true;


                console.log("error my friend");
            });
    };
    $scope.vista_respuestas_multiple_pregunta = function (id_pregunta) {

        $scope.ver_resp_pre = true;
        $scope.error_resp_pre = false;
        $http.get('/Ofertas_Control/vista_respuestas_multiple_pregunta/' + id_pregunta).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log("izi2");
                    $scope.ver_resp_pre = false;
                    $scope.respuesta_pregunta = successResponse.data.respuesta_p;


                } else {
                    $scope.respuesta_pregunta = "";
                    $scope.ver_resp_pre = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_resp_pre = false;
                $scope.error_resp_pre = true;


                console.log("error my friend");
            });
    };


}]);

app.controller('faq_portal', ['$scope', '$http', function ($scope, $http) {

    $scope.preguntas_frecuentes = {};
    $scope.c_preguntas_frecuentes = {};
    $scope.p_f = function () {

        $scope.ver_p_f = true;
        $scope.ver_error_p_f = false;
        $http.get('/faq/listar_faq').then(
            function (successResponse) {
                if (successResponse.data.success == true) {

                    $scope.ver_p_f = false;
                    $scope.preguntas_frecuentes = successResponse.data.pregunta_f;
                    console.log($scope.preguntas_frecuentes);

                } else {
                    $scope.preguntas_frecuentes = "";
                    $scope.ver_p_f_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_p_f = false;
                $scope.error_p_f = true;


                console.log("error my friend");
            });
    };
    $scope.c_p_f = function () {

        $scope.ver_c_p_f = true;
        $scope.ver_error_c_p_f = false;
        $http.get('/faq/listar_categorias_faq').then(
            function (successResponse) {
                if (successResponse.data.success == true) {

                    $scope.ver_c_p_f = false;
                    $scope.c_preguntas_frecuentes = successResponse.data.pregunta_f_c;
                    console.log($scope.c_preguntas_frecuentes);

                } else {
                    $scope.c_preguntas_frecuentes = "";
                    $scope.ver_c_p_f_of = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_c_p_f = false;
                $scope.ver_error_c_p_f = true;


                console.log("error my friend");
            });
    };

}]);
app.controller('inicio_portal', ['$scope', '$http', function ($scope, $http) {

    $scope.postulaciones_inicio = {};
    $scope.postulaciones_inicio_ofertas = {};
    $scope.p_i = function () {

        $scope.ver_p_i = true;
        $scope.ver_error_p_i = false;
        $http.get('/Curriculum_mant/postulaciones_inicio').then(
            function (successResponse) {
                if (successResponse.data.success == true) {

                    $scope.ver_p_i = false;
                    $scope.postulaciones_inicio = successResponse.data.postulaciones_i;
                    console.log($scope.postulaciones_inicio);

                } else {
                    $scope.postulaciones_inicio = "";
                    $scope.ver_p_i = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_p_i = false;
                $scope.error_p_i = true;


                console.log("error my friend");
            });
    };

    $scope.p_o = function () {

        $scope.ver_p_o = true;
        $scope.ver_error_p_o = false;
        $http.get('/Curriculum_mant/postulaciones_inicio_ofertas').then(
            function (successResponse) {
                if (successResponse.data.success == true) {

                    $scope.ver_p_o = false;
                    $scope.postulaciones_inicio_ofertas = successResponse.data.postulaciones_o;
                    console.log($scope.postulaciones_inicio_ofertas);

                } else {
                    $scope.postulaciones_inicio_ofertas = "";
                    $scope.ver_p_o = false;
                    console.log("gg");
                }
            },
            function (errorResponse) {
                $scope.ver_p_o = false;
                $scope.error_p_o = true;


                console.log("error my friend");
            });
    };
}]);

app.controller('postulaciones', ['$scope', '$http', function ($scope, $http) {

    $scope.listado_postulacion = {};
    $scope.r_e_post = {};

    $scope.rellenar_estado_postulacion = function () {


        $http.get('/Curriculum_mant/rellenar_estado_postulaciones').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.r_e_post = successResponse.data.rellenar_e_pos;
                    console.log(successResponse.data.r_e_post);

                }
                else {
                    $scope.r_e_post = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };
    $scope.rellenar_listado_postulacion = function () {


        $http.get('/Curriculum_mant/listar_postulaciones_persona').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('successwerwer');
                    $scope.listado_postulacion = successResponse.data.listado_post;
                    console.log(successResponse.data.listado_postulacion);

                }
                else {
                    $scope.listado_postulacion = null;

                    console.log("bla bla blawerwer");
                }
            },
            function (errorResponse) {

                console.log("error my friendwerwer");
            });
    };

}]);

app.controller('micuenta', ['$scope', '$http', function ($scope, $http) {

    $scope.datos_per = {};

    $scope.datos_persona = function () {

        $scope.ver_datos = true;
        $scope.error_datos = false;
        $http.get('/Curriculum_mant/datos_persona_curriculum').then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('success');
                    $scope.datos_per = successResponse.data.datos_p;
                    console.log(successResponse.data.datos_p);
                    $scope.ver_datos = false;
                }
                else {
                    $scope.datos_per = null;
                    $scope.ver_datos = false;
                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
                $scope.error_datos = true;
                $scope.ver_datos = false;
                console.log("error my friend");
            });
    };

}]);
app.controller('soporte', ['$scope', '$http', function ($scope, $http) {

   
   

    $scope.soporte_men = function () {
        console.log($scope.soporte_datos);
       
      
        var nuevo_soporte = new FormData();
        nuevo_soporte.append('nombre_remitente', $scope.soporte_datos.nombre_remitente);
        nuevo_soporte.append('correo_remitente', $scope.soporte_datos.correo_remitente);
        nuevo_soporte.append('rut_remitente', $scope.soporte_datos.rut_remitente);
        nuevo_soporte.append('digito_rut_remitente', $scope.soporte_datos.digito_rut_remitente);
        nuevo_soporte.append('asunto_mensaje', $scope.soporte_datos.asunto_mensaje);
        nuevo_soporte.append('descripcion_mensaje', $scope.soporte_datos.descripcion_mensaje);
        nuevo_soporte.append('fotos', $scope.soporte_datos.fotos);
       
        $http.post('/soporte/enviar_soporte', nuevo_soporte
            , {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }
            ).then(
            function (successResponse) {
                if (successResponse.data.success == true) {
                    console.log('success');
                    $scope.datos_per = successResponse.data.datos_p;
                
                }
                else {
             
                    console.log("bla bla bla");
                }
            },
            function (errorResponse) {
              
                console.log("error my friend");
            });
    };

}]);




   app.directive('fileModel', ['$parse', function ($parse) {
       return {
          
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;
                  
                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]);
      
  


