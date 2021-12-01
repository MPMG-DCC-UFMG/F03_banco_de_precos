"use strict";

/* eslint-disable no-eval */

/**
 * Update all `theme.spacing.unit` usages to use `theme.spacing()`.
 * Find and replace string literal AST nodes to ensure all spacing API usages get updated, regardless
 * of any calculation being performed.
 * @param {jscodeshift_api_object} j
 * @param {jscodeshift_ast_object} root
 */
function transformThemeSpacingApi(j, root) {
  var mightContainApi = function mightContainApi(path) {
    return j(path).find(j.MemberExpression, {
      object: {
        property: {
          name: 'spacing'
        }
      },
      property: {
        name: 'unit'
      }
    }).size() > 0;
  };

  var replaceApi = function replaceApi(pathArg) {
    pathArg.find(j.MemberExpression, {
      object: {
        property: {
          name: 'spacing'
        }
      },
      property: {
        name: 'unit'
      }
    }).replaceWith(function (path) {
      var param = null;
      var themeParam = path.node.object.object.name;

      if (j.BinaryExpression.check(path.parent.node)) {
        var expression = path.parent.node;
        var operation = expression.operator; // check if it's a variable

        if (j.Identifier.check(expression.right)) {
          param = expression.right;
        } else if (j.Literal.check(expression.right)) {
          var value = expression.right.value;

          if (operation === '*' || operation === '/') {
            param = j.literal(eval("1 ".concat(operation, " ").concat(value)));
          }
        }
      }

      if (param) {
        path.parent.replace(j.callExpression(j.memberExpression(j.identifier(themeParam), j.identifier('spacing')), [param]));
        return path.node;
      }

      return j.callExpression(j.memberExpression(j.identifier(themeParam), j.identifier('spacing')), [j.literal(1)]);
    });
  };

  var arrowFunctions = root.find(j.ArrowFunctionExpression).filter(mightContainApi);
  var functionDeclarations = root.find(j.FunctionDeclaration).filter(mightContainApi);
  replaceApi(arrowFunctions);
  replaceApi(functionDeclarations);
}
/**
 * Update all `spacing.unit` usages to use `spacing()`.
 * Find and replace string literal AST nodes to ensure all spacing API usages get updated, regardless
 * of any calculation being performed.
 * @param {jscodeshift_api_object} j
 * @param {jscodeshift_ast_object} root
 */


function transformThemeSpacingApiDestructured(j, root) {
  var mightContainApi = function mightContainApi(path) {
    return j(path).find(j.MemberExpression, {
      object: {
        name: 'spacing'
      },
      property: {
        name: 'unit'
      }
    }).size() > 0;
  };

  var replaceApi = function replaceApi(pathArg) {
    pathArg.find(j.MemberExpression, {
      object: {
        name: 'spacing'
      },
      property: {
        name: 'unit'
      }
    }).replaceWith(function (path) {
      var param = null;
      var spacingParam = path.node.object.name;

      if (j.BinaryExpression.check(path.parent.node)) {
        var expression = path.parent.node;
        var operation = expression.operator; // check if it's a variable

        if (j.Identifier.check(expression.right)) {
          param = expression.right;
        } else if (j.Literal.check(expression.right)) {
          var value = expression.right.value;

          if (operation === '*' || operation === '/') {
            param = j.literal(eval("1 ".concat(operation, " ").concat(value)));
          }
        }
      }

      if (param) {
        path.parent.replace(j.callExpression(j.identifier(spacingParam), [param]));
        return path.node;
      }

      return j.callExpression(j.identifier(spacingParam), [j.literal(1)]);
    });
  };

  var arrowFunctions = root.find(j.ArrowFunctionExpression).filter(mightContainApi);
  var functionDeclarations = root.find(j.FunctionDeclaration).filter(mightContainApi);
  replaceApi(arrowFunctions);
  replaceApi(functionDeclarations);
}

module.exports = function transformer(fileInfo, api) {
  var j = api.jscodeshift;
  var root = j(fileInfo.source); // transforms

  transformThemeSpacingApi(j, root);
  transformThemeSpacingApiDestructured(j, root);
  return root.toSource({
    quote: 'single'
  });
};