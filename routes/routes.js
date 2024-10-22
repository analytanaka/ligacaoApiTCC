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
router.get('/receitas/:rec_id', ReceitasController.listarReceitas);
router.post('/receitas', ReceitasController.cadastrarReceitas); 
router.post('/receitas/:rec_id', ReceitasController.cadastrarReceitas); 
router.patch('/receitas', ReceitasController.editarReceitas); 
router.patch('/receitas/:rec_id', ReceitasController.editarReceitas); 
router.delete('/receitas', ReceitasController.apagarReceitas); 
router.delete('/receitas/:rec_id', ReceitasController.apagarReceitas); 

router.get('/despesas', DespesasController.listarDespesas);
router.get('/desp/:des_id', DespesasController.listarDesp);
router.post('/despesas', DespesasController.cadastrarDespesas); 
router.post('/despesas/:des_id', DespesasController.cadastrarDespesas);
router.patch('/despesas', DespesasController.editarDespesas); 
router.patch('/despesas/:des_id', DespesasController.editarDespesas); 
router.delete('/despesas', DespesasController.apagarDespesas); 
router.delete('/despesas/:des_id', DespesasController.apagarDespesas); 

router.get('/classificacao', ClassificacaoController.listarClassificacao);
router.post('/classificacao', ClassificacaoController.cadastrarClassificacao); 
router.patch('/classificacao', ClassificacaoController.editarClassificacao); 
router.patch('/classificacao/:cla_id', ClassificacaoController.editarClassificacao); 
router.delete('/classificacao', ClassificacaoController.apagarClassificacao); 
router.delete('/classificacao/:cla_id', ClassificacaoController.apagarClassificacao); 

router.get('/tipos_despesa', TiposDespesaController .listarTiposDespesa);
router.get('/tp_despesa/:tp_id', TiposDespesaController .listarTiposDespesa);
router.post('/tipos_despesa', TiposDespesaController .cadastrarTiposDespesa); 
router.patch('/tipos_despesa/:tp_id', TiposDespesaController .editarTiposDespesa); 
router.delete('/tipos_despesa/:tp_id', TiposDespesaController .apagarTiposDespesa); 

module.exports = router;