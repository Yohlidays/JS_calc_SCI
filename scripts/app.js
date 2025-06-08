"use strict";

console.log('app.js chargé');

// Variables globales
const buttons = document.querySelectorAll('button');
const lines = ["", "", ""]; // Stocke les valeurs des 3 lignes
const displayLines = [
    document.getElementById('line1'),
    document.getElementById('line2'),
    document.getElementById('line3')
]; // Références aux 3 lignes d'affichage
const result = document.getElementById('result'); // Référence au résultat
const ERROR_MESSAGE = "Erreur"; // Constante pour les messages d'erreur

// Fonction pour déplacer les lignes après un calcul
function shiftLines() {
    lines[0] = lines[1];
    lines[1] = lines[2];
    lines[2] = "";
}

// Gestion des clics sur les boutons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent.trim();
        console.log(`${buttonValue} clicked`);

        if (!isNaN(buttonValue)) {
            // Ajoute un chiffre à la ligne active
            lines[2] += buttonValue;
        } else if (buttonValue === '.') {
            // Vérifie si le dernier nombre contient déjà un point
            const lastNumber = lines[2].split(/[\+\-\*\/\(\)]/).pop(); // Récupère le dernier nombre
            if (!lastNumber.includes('.')) {
                lines[2] += buttonValue; // Ajoute le point si aucun n'est présent dans le dernier nombre
            }
        } else {
            switch (buttonValue) {
                case 'Clear':
                    // Réinitialise toutes les lignes et le résultat
                    lines[0] = lines[1] = lines[2] = "";
                    result.textContent = "0";
                    break;

                case 'Del':
                    // Supprime le dernier caractère de la ligne active
                    lines[2] = lines[2].slice(0, -1);
                    break;

                case 'Ans':
                    // Utilise le dernier résultat si disponible
                    if (result.textContent !== ERROR_MESSAGE && result.textContent !== "0") {
                        // Supprime toute mise en forme pour garantir un nombre valide
                        const sanitizedResult = result.textContent.replace(/[^0-9\.\-eE]/g, '');
                        lines[2] += sanitizedResult;
                    }
                    break;

                case '=':
                    try {
                        if (lines[2].includes('=')) {
                            shiftLines();
                            break;
                        }

                        // Si la ligne active est vide, utilise la ligne précédente ou le résultat
                        if (lines[2].trim() === "") {
                            lines[2] = lines[1].trim() !== "" && lines[1] !== ERROR_MESSAGE
                                ? lines[1]
                                : result.textContent !== ERROR_MESSAGE && result.textContent !== "0"
                                    ? result.textContent
                                    : "0";
                        }

                        // Compte les parenthèses ouvertes et fermées
                        const openParentheses = (lines[2].match(/\(/g) || []).length;
                        const closeParentheses = (lines[2].match(/\)/g) || []).length;

                        // Ajoute les parenthèses fermées manquantes
                        let sanitizedExpression = lines[2];
                        if (openParentheses > closeParentheses) {
                            sanitizedExpression += ')'.repeat(openParentheses - closeParentheses);
                        }

                        // Remplace les fonctions mathématiques, `x²`, `%`, et les symboles Unicode par leurs équivalents calculables
                        let calculableExpression = sanitizedExpression
                            .replace(/\bsin\(/g, 'Math.sin(')
                            .replace(/\bcos\(/g, 'Math.cos(')
                            .replace(/\btan\(/g, 'Math.tan(')
                            .replace(/\blog\(/g, 'Math.log10(')
                            .replace(/√\(/g, 'Math.sqrt(') // Remplace correctement `√(` par `Math.sqrt(`
                            .replace(/×/g, '*') // Remplace `×` par `*`
                            .replace(/÷/g, '/') // Remplace `÷` par `/`
                            .replace(/−/g, '-') // Remplace `−` par `-`
                            .replace(/(\d+)\²/g, 'Math.pow($1, 2)') // Remplace `x²` par `Math.pow(x, 2)`
                            .replace(/(\d+)%/g, '($1 / 100)'); // Remplace `10%` par `(10 / 100)'

                        console.log("Avant remplacement :", sanitizedExpression);
                        console.log("Après remplacement :", calculableExpression);

                        // Nettoie l'expression calculable pour éviter les erreurs (par exemple, un opérateur à la fin)
                        calculableExpression = calculableExpression.trim().replace(/[\+\-\*\/]$/, "");

                        // Évalue l'expression calculable
                        let resultValue = eval(calculableExpression);

                        console.log("Résultat brut :", resultValue);
                        // Vérifie si le résultat est un nombre valide

                        // Affiche le résultat dans la zone de résultat
                        resultValue = isNaN(resultValue) || !isFinite(resultValue) ? ERROR_MESSAGE : resultValue;

                        // Vérifie si le résultat est un nombre
                        if (typeof resultValue === 'number') {
                            const integerPartLength = resultValue.toFixed(0).length; // Longueur de la partie entière
                            const maxDecimals = Math.max(0, 12 - integerPartLength - 1); // Décimales autorisées pour respecter 12 caractères
                            let formattedResult = resultValue.toFixed(maxDecimals); // Premier traitement : arrondi des décimales

                            // Supprime les zéros inutiles en fin de décimales
                            formattedResult = parseFloat(formattedResult).toString();

                            // Si le résultat dépasse 12 caractères après le premier traitement, passe en mode scientifique
                            if (formattedResult.length > 12) {
                                formattedResult = resultValue.toExponential(6); // Mode scientifique avec 6 décimales
                            }

                            result.textContent = formattedResult; // Affiche le résultat final
                        } else {
                            // Si ce n'est pas un nombre, affiche directement le résultat
                            result.textContent = resultValue.toString();
                        }

// Conserve l'expression calculée brute dans `lines[2]`
lines[2] = sanitizedExpression;

// Ajoute un égal à la ligne active pour indiquer le calcul effectué
lines[2] += '=';

// Mets en gras la ligne 2 après le calcul pour indiquer que c'est ce calcul qui est affiché dans `result`
displayLines[1].style.fontWeight = 'bold';

// Déplace le contenu de la ligne active vers la ligne précédente
shiftLines();

                        // Conserve l'expression calculée brute dans `lines[2]`
                        lines[2] = sanitizedExpression;

                        // Ajoute un égal à la ligne active pour indiquer le calcul effectué
                        lines[2] += '=';

                        // Mets en gras la ligne 2 après le calcul pour indiquer que c'est ce calcul qui est affiché dans `result`
                        displayLines[1].style.fontWeight = 'bold';

                        // Déplace le contenu de la ligne active vers la ligne précédente
                        shiftLines();
                    } catch (error) {
                        console.error("Erreur lors de l'évaluation :", error.message);
                        result.textContent = ERROR_MESSAGE;
                    }
                    break;

                case 'log':
                case 'sin':
                case 'cos':
                case 'tan':
                case '√':
                    // Ajoute la fonction mathématique à la ligne active
                    lines[2] += `${buttonValue}(`;
                    break;

                case 'x²':
                    // Ajoute `²` à la ligne active sans effectuer de calcul
                    lines[2] += '²';
                    break;

                case '%':
                    // Ajoute `%` à la ligne active sans effectuer de calcul immédiat
                    lines[2] += '%';
                    break;

                case 'π':
                    // Ajoute la valeur de π à la ligne active
                    lines[2] += Math.PI.toFixed(12); // Limite à 12 décimales pour éviter les erreurs d'affichage
                    break;

                default:
                    // Si la ligne active est vide et qu'un opérateur est saisi, ajoute "0" avant l'opérateur
                    if (lines[2].trim() === "") {
                        lines[2] = "0";
                    }
                    // Ajoute l'opérateur à la ligne active
                    lines[2] += buttonValue;
                    break;
            }
        }

        // Met à jour l'affichage des lignes
        displayLines.forEach((line, index) => {
            line.value = lines[index];
        });

        console.log("Lines:", lines);
    });
});