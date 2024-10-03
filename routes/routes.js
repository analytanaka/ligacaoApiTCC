const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuario');
const ReceitasController = require('../controllers/receitas');
const DespesasController = require('../controllers/despesas');
const ClassificacaoController = require('../controllers/classificacao');
const TiposDespesaController = require('../controllers/tipos_despesa');

router.get('/usuario', UsuarioController.listarUsuario);
router.get('/perfil/:usu_id', UsuarioController.listarPerfil);
router.post('/usuario', UsuarioController.cadastrarUsuario); 
router.patch('/usuario', UsuarioController.editarUsuario);
router.patch('/usuario/:usu_id', UsuarioController.editarUsuario);
router.delete('/usuario', UsuarioController.apagarUsuario); 
router.delete('/usuario/:usu_id', UsuarioController.apagarUsuario); 


router.get('/receitas', ReceitasController.listarReceitas);
router.post('/receitas', ReceitasController.cadastrarReceitas); 
router.patch('/receitas', ReceitasController.editarReceitas); 
router.delete('/receitas', ReceitasController.apagarReceitas); 

router.get('/despesas', DespesasController.listarDespesas);
router.get('/desp/:des_id', DespesasController.listarDesp);
router.post('/despesas', DespesasController.cadastrarDespesas); 
router.patch('/despesas', DespesasController.editarDespesas); 
router.delete('/despesas', DespesasController.apagarDespesas); 

router.get('/classificacao', ClassificacaoController.listarClassificacao);
router.post('/classificacao', ClassificacaoController.cadastrarClassificacao); 
router.patch('/classificacao', ClassificacaoController.editarClassificacao); 
router.delete('/classificacao', ClassificacaoController.apagarClassificacao); 

router.get('/tipos_despesa', TiposDespesaController .listarTiposDespesa);
router.post('/tipos_despesa', TiposDespesaController .cadastrarTiposDespesa); 
router.patch('/tipos_despesa', TiposDespesaController .editarTiposDespesa); 
router.delete('/tipos_despesa', TiposDespesaController .apagarTiposDespesa); 

module.exports = router;