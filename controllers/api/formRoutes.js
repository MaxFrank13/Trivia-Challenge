const router = require('express').Router();
const { Categories, Difficulties, Types } = require('../../models');

// GET all form data
router.get('/all', async (req, res) => {
  try {
    const categoryData = await Categories.findAll({
      where: {
        active: true,
      },
    });
    
    const difficultyData = await Difficulties.findAll({
      where: {
        active: true,
      },
    });
    
    const typeData = await Types.findAll({
      where: {
        active: true,
      },
    });
    
    const categories = categoryData.map(category => category.get({ plain: true }));
    
    const difficulties = difficultyData.map(difficulty => difficulty.get({ plain: true }));
    
    const types = typeData.map(type => type.get({ plain: true }));
    
    res.status(200).json({
      categories,
      difficulties,
      types
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

// GET all categories for form WHERE active = true
router.get('/categories', async (req, res) => {
  try {
    const categoryData = await Categories.findAll({
      where: {
        active: true,
      },
    });
  
    const categories = categoryData.map(category => category.get({ plain: true }));
  
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  };
});

// GET all difficulties
router.get('/difficulties', async (req, res) => {
  try {
    const difficultyData = await Difficulties.findAll({
      where: {
        active: true,
      },
    });
  
    const difficulties = difficultyData.map(difficulty => difficulty.get({ plain: true }));
  
    res.status(200).json(difficulties);
  } catch (err) {
    res.status(500).json(err);
  };
});

// GET all types
router.get('/types', async (req, res) => {
  try {
    const typeData = await Types.findAll({
      where: {
        active: true,
      },
    });
  
    const types = typeData.map(type => type.get({ plain: true }));
  
    res.status(200).json(types);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;