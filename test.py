from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import logging
import time
import os

# Configuration de la journalisation
logging.basicConfig(level=logging.INFO)

# Constantes
URL = "http://front-aes-recette.burotopiris.com/"
CUSTOMER_CODE = "100002"
USERNAME = "Admin"
PASSWORD = "Docaposte1!"

def confirm_action(action):
    """Affiche un message de confirmation après chaque action."""
    logging.info(f"L'action '{action}' a été effectuée avec succès.")

def error_action(action, error):
    """Affiche un message d'erreur après une action échouée."""
    logging.error(f"Erreur lors de l'action '{action}' : {error}")

def test_connexion(driver):
    try:
        driver.get(URL)
        time.sleep(2)  # Pause pour permettre le chargement de la page
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "customercode"))
        ).send_keys(CUSTOMER_CODE)
        confirm_action("Connexion avec le code client")

        driver.find_element(By.NAME, "username").send_keys(USERNAME)
        confirm_action("Saisie du nom d'utilisateur")

        driver.find_element(By.NAME, "password").send_keys(PASSWORD)
        confirm_action("Saisie du mot de passe")

        driver.find_element(By.NAME, "password").send_keys(Keys.RETURN)
        confirm_action("Soumission du formulaire de connexion")
        time.sleep(2)  # Pause pour attendre le chargement de la page suivante

        WebDriverWait(driver, 10).until(
            EC.title_contains("Archive-e-Service (AeS)")
        )
        confirm_action("Connexion réussie à la page d'accueil")
    except Exception as e:
        error_action("Connexion", e)



def test_deconnexion(driver):
    try:
        time.sleep(5)  # Attendre que le dépôt soit terminé

        # Attendre que la page soit chargée
        WebDriverWait(driver, 10).until(
            EC.title_contains("Archive-e-Service (AeS)")
        )

        # Attendre que le bouton soit cliquable et cliquer dessus
        profile_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='header-profile']"))
        )
        profile_button.click()
        confirm_action("Clic sur le profil")
        time.sleep(2)  # Pause après le clic

        # Cliquer sur le bouton de déconnexion
        WebDriverWait(driver, 5).until(
            EC.visibility_of_element_located((By.XPATH, "//li[text()='Se déconnecter']"))
        ).click()
        confirm_action("Clic sur 'Se déconnecter'")
        time.sleep(2)  # Pause après le clic

        # Attendre que la page de déconnexion soit chargée
        WebDriverWait(driver, 5).until(
            EC.title_contains("DECONNEXION REUSSIE")
        )
        logging.info("Déconnexion réussie.")
    except Exception as e:
        error_action("Déconnexion", e)

def main():
    driver = webdriver.Chrome()
    try:
        test_connexion(driver)
        test_deconnexion(driver)  # Appel de la fonction de déconnexion
    finally:
        driver.quit()

if __name__ == "__main__":
    main()
